'use server';
import { IRegisterData } from "@/types/Register";
import { registerSchema } from "./RegisterSchema";
import { cookies } from "next/headers";
import { CapitalizeFirstLetter } from "../CapitalizeFirstLetter";

export default async function RegisterAction(prevState: IRegisterData, formData: FormData): Promise<IRegisterData> {
    const cookieSore = await cookies();

    const formValues = {
        first_name: CapitalizeFirstLetter(formData.get('first_name') as string),
        last_name: CapitalizeFirstLetter(formData.get('last_name') as string),
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        password_confirmation: formData.get('password_confirmation') as string,
    }

    const validationForm = registerSchema.safeParse(formValues);
    
    if (!validationForm.success) {
        return {
            data: formValues,
            errors: validationForm.error.flatten().fieldErrors,
            success: false,
        }
    }
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`, {
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

    cookieSore.set('email', JSON.stringify(data?.data?.email));
    cookieSore.set('token', JSON.stringify(data?.data?.token));
    
    return {
        success: true,
        data: null,
        message: data.message
    }
}
