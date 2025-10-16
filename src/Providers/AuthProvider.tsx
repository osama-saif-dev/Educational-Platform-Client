'use client';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '@/lib/store/reducers/user';
import type { RootState } from '@/lib/store/store';
import Cookie from 'cookie-universal';
import { useRouter } from 'next/navigation';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const access_token = useSelector((state: RootState) => state.auth.access_token);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const initializeAuth = async () => {
            const cookies = Cookie();
            const refresh_token = cookies.get('refresh_token');
            if (!refresh_token) return;
            try {
                const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh_token`,
                    { refresh_token }
                );
                const { user, access_token } = res.data.data;
                dispatch(setCredentials({ user, access_token }));
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    router.replace('/login');
                    console.log('Error refreshing token:', error);
                }
            }
        };
        if (!access_token) {
            initializeAuth();
        }
    }, [access_token, dispatch, router]);

    return <>{children}</>;
}
