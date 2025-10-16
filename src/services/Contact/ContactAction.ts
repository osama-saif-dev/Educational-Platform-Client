'use server';
import { IContactData } from '@/types/ContactForm'
import { contactSchema } from './ContactSchema';

export default async function ContactAction(prevState: IContactData, formData: FormData, access_token: string | null):
  Promise<IContactData> {

  const formValues = {
    first_name: formData.get('first_name') as string,
    last_name: formData.get('last_name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  }

  const validationForm = contactSchema.safeParse(formValues);

  if (!validationForm.success) {
    return {
      data: formValues,
      errors: validationForm.error.flatten().fieldErrors,
      success: false,
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/contact`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    },
    body: JSON.stringify(formValues)
  });

  const data = await res.json();

  if (!res.ok) {
    return {
      data: formValues,
      errors: data.errors,
      success: false,
    }
  }

  return {
    success: true,
    data: null,
    errors: null,
    message: data.message
  }
}
