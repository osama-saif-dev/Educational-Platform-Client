'use client';
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookie from 'cookie-universal';
import { toast } from "react-toastify";

export default function CleanUpCookies({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    const router = useRouter();
    const toastId = 'login-toast';

    // if user exist from verify page i will remove cookies that i was set it to him 
    useEffect(() => {
        const cookies = Cookie();
        const email = cookies.get('email');
        const token = cookies.get('token');
        const check_email = cookies.get('check_email');
        
        if ((email && token) && pathName.startsWith('/verify')) {
            return;
        } else if ((!email || !token ) && pathName.startsWith('/verify')){
            if (!toast.isActive(toastId)){
                toast.info('Please Make Sign In Again', { toastId });
            }
            router.replace('/login');
        }
         else {
            cookies.remove('email');
            cookies.remove('token');
        }

        if (check_email && (pathName.startsWith('/reset-password') || pathName.startsWith('/forget-password'))) {
            return;
        } else {
            cookies.remove('check_email')
        }
    }, [pathName, router]);
    
    return <>{children}</>;
}
