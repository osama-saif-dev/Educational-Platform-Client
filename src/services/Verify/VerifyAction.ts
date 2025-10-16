'use server';
import { IVerifyData } from "@/types/Verify";
import { verifySchema } from "./VerifySchema";
import { getToken } from "../GetToken";
import { cookies } from "next/headers";

export default async function VerifyAction(prevState: IVerifyData, formData: FormData):
    Promise<IVerifyData> {

    const cookieStore = await cookies();
    const token = await getToken();
    
    const formValues = {
        code: formData.get('code') as string
    }

    const validationFields = verifySchema.safeParse(formValues);

    if (!validationFields.success) {
        return {
            errors: validationFields.error.flatten().fieldErrors,
            success: false,
            user: null,
            access_token: ''
        }
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify_code`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formValues)
    });

    const data = await res.json();

    if (!res.ok) {
        return {
            message: data?.errors?.error,
            errors: data.errors.error,
            success: false,
            user: null,
            access_token: ''
        }
    }

    cookieStore.delete('email');
    cookieStore.delete('token');
    cookieStore.set('refresh_token', JSON.stringify(data.data.refresh_token));

    return {
        user: data.data.user,
        access_token: data.data.access_token,
        errors: null,
        success: true,
        message: 'Login Successfully'
    }
}
