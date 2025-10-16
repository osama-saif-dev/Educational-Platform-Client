'use server';
import { cookies } from "next/headers";
import { forgetPasswordSchema } from "./ForgetPasswordSchema";
import { IForgetPasswordData } from "@/types/ForgetPassword";

export default async function ForgetPasswordAction(prevState: IForgetPasswordData, formData: FormData):
    Promise<IForgetPasswordData> {
    
    const cookieStore = await cookies();

    const formValues = {
        email: formData.get('email') as string,
    }

    const validationForm = forgetPasswordSchema.safeParse(formValues);

    if (!validationForm.success) {
        return {
            data: formValues,
            errors: validationForm.error.flatten().fieldErrors,
            success: false,
        }
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/forget_password`, {
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
            message: data.errors.error,
            errors: data.errors,
            success: false,
        }
    }
    cookieStore.set('check_email', JSON.stringify(formValues.email));
    return {
        errors: null,
        success: true,
        message: data.message,
        data: null,
    }
}
