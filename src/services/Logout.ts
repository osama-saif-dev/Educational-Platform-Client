'use client';
import { store } from "@/lib/store/store";
import axios from "axios";
import Cookie from 'cookie-universal';
import { toast } from "react-toastify";

export const LogoutServer = async () => {
    const cookie = Cookie();
    try {
        cookie.remove('refresh_token');
        const access_token = store.getState().auth.access_token;
        await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        toast.success('Logout Successfully');
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error)
        }
    }
}