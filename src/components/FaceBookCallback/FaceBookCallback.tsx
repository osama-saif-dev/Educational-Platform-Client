'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Cookie from 'cookie-universal';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/lib/store/reducers/user';
import { toast } from 'react-toastify';
import { childYDiv, parentDiv } from '@/services/ParentAndChildMotions';
import { motion } from 'motion/react';
import Image from 'next/image';
import sucessImage from '@/../public/check.png';

export default function FaceBookCallback() {

    const searchParams = useSearchParams();
    const dispatch = useDispatch();
    const cookieStore = Cookie();
    const router = useRouter();

    useEffect(() => {
        const data = searchParams.get('data');

        if (!data) return router.push('/login');

        cookieStore.set('refresh_token', JSON.parse(data)?.refresh_token);
        const { user, access_token } = JSON.parse(data);
        dispatch(setCredentials({
            user, access_token
        }));

        console.log(user)
        console.log(access_token)
        if (user?.role) {
            router.replace('/');
            toast.success('Login Successfully');
        }

        // setTimeout(() => {
        //     // if (user?.role === 'admin'){
        //     //     router.replace('/admin');
        //     // } else if (user?.role === 'doctor' && !user?.clinic_address){
        //     //     router.replace('/doctor-dashboard/profile');
        //     // } else if (user?.role === 'doctor' && user?.clinic_address){
        //     //     router.replace('/doctor-dashboard')
        //     // }else if (user?.role === 'user' && !user?.phone){
        //     //     router.replace('/profile');
        //     // } else if (user?.role === 'user' && user?.phone){
        //     //     router.replace('/');
        //     // }

        // }, 1000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <motion.div
            variants={parentDiv}
            initial='hidden'
            whileInView='visible'
            className='flex flex-col h-[calc(100vh-125px)] md:h-[calc(100vh-150px)] items-center justify-center gap-4 p-[5px] @md:px-[10px] @md:py-[20px]'>
            <motion.div
                variants={childYDiv}
            >
                <Image src={sucessImage} height={120} width={120} priority alt='Login Successfully' />
            </motion.div>
            <motion.h1
                variants={childYDiv}
                className='text-[40px] sm:text-[50px] md:text-[60px] text-center font-semibold text-dark-blue'>Login Successfully</motion.h1>
        </motion.div>
    );
} 