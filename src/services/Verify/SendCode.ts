'use client';
import axios from "axios";
import { getToken } from "../GetToken"
import { toast } from "react-toastify";
const toastId = 'sendCode-toast';

export const sendCode = async () => {
    const token = await getToken();
    try {
        await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/send_code`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (!toast.isActive(toastId)){
            toast.success('We Sent Code To Your Email', { toastId });
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error);
        }
    }
}