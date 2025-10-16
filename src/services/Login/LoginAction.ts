'use server';
import { ILoginData } from "@/types/Login";
import { cookies } from "next/headers";
import { loginSchema } from "./LoginSchema";

export default async function LoginAction(prevState: ILoginData, formData: FormData):
    Promise<ILoginData> {
    const cookieSore = await cookies();

    const formValues = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }


    const validationForm = loginSchema.safeParse(formValues);

    if (!validationForm.success) {
        return {
            data: formValues,
            errors: validationForm.error.flatten().fieldErrors,
            success: false,
        }
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues)
    });

    const data = await res.json();

    if (!res.ok) {
        if (data.message == 'You Must Verify Your Email') {
            cookieSore.set('email', JSON.stringify(data?.data?.email));
            cookieSore.set('token', JSON.stringify(data?.data?.access_token));
        }
        return {
            data: formValues,
            message: data.errors.error || data.message,
            errors: null,
            success: false,
        }
    }

    cookieSore.set('refresh_token', JSON.stringify(data?.data?.refresh_token));

    return {
        errors: null,
        success: true,
        message: data.message,
        data: null,
        user: data.data.user,
        access_token: data.data.access_token
    }
}
