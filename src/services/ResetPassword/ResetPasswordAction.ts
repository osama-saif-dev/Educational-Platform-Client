import { IResetPasswordData } from '@/types/ResetPassword'
import { resetPasswordSchema } from './ResetPasswordSchema';

export default async function ResetPasswordAction(
  prevState: IResetPasswordData,
  formData: FormData,
  email: string | null,
  token: string | null
):
  Promise<IResetPasswordData> {

  const formValues = {
    email: email,
    token: token,
    password: formData.get('password') as string,
    password_confirmation: formData.get('password_confirmation') as string,
  }

  const validationForm = resetPasswordSchema.safeParse(formValues);

  if (!validationForm.success) {
    return {
      data: formValues,
      errors: validationForm.error.flatten().fieldErrors,
      success: false,
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset_password`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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
    data: null,
    errors: null,
    success: true,
    message: data.message,
  }
}
