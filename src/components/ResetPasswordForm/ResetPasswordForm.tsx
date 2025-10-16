'use client';
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useActionState, useEffect, useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import passwordLogo from '@/../public/Vector (1).png';
import ResetPasswordAction from '@/services/ResetPassword/ResetPasswordAction';
import { IResetPasswordData } from '@/types/ResetPassword';
import { toast } from 'react-toastify';
import { motion } from 'motion/react';
import { childXDiv, childYDiv, parentDiv } from '@/services/ParentAndChildMotions';

const initialState = {
    data: null,
    errors: null,
    success: false,
    message: ''
}

export default function ResetPasswordForm() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    const [state, action, pending] = useActionState<IResetPasswordData, FormData>(
        (prevState, formData) => ResetPasswordAction(prevState, formData, email, token),
        initialState
    );
    const router = useRouter();

    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState<boolean>(true);
    const handlePassword = () => setShowPassword(prev => !prev);
    const handlePasswordConfirmation = () => setShowPasswordConfirmation(prev => !prev);

    useEffect(() => {
        if (state?.success && state?.message) {
            toast.success(state?.message);
            router.replace('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <form action={action} className="mt-8">
            <div className="flex flex-col gap-4">

                <motion.div variants={parentDiv} initial='hidden' animate='visible' className="flex flex-col gap-2">
                    <motion.label variants={childXDiv} htmlFor="password" className="cursor-pointer">Password</motion.label>
                    <motion.div variants={childYDiv} className="relative rounded-md border border-input">
                        <Image className="absolute left-[15px] top-1/2 transform -translate-y-1/2" width={16} src={passwordLogo} alt="User Logo" />
                        <input className="outline-none pl-12 w-full p-3" name="password" type={showPassword ? 'password' : 'text'} id="password" placeholder="Enter Your Password" />
                        <div onClick={handlePassword}>
                            {showPassword ? (
                                <IoEyeOffOutline className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-second hover:text-black transition-all duration-300 ease-in-out cursor-pointer" />
                            ) : (
                                <IoEyeOutline className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-second hover:text-black transition-all duration-300 ease-in-out cursor-pointer" />
                            )}
                        </div>
                    </motion.div>
                    {state?.errors?.password && <motion.span variants={childYDiv} className="text-red-500">{state.errors.password[0]}</motion.span>}
                </motion.div>

                <motion.div variants={parentDiv} initial='hidden' animate='visible' className="flex flex-col gap-2">
                    <motion.label variants={childXDiv} htmlFor="password_confirmation" className="cursor-pointer">Password Confirmation</motion.label>
                    <motion.div variants={childYDiv} className="relative rounded-md border border-input">
                        <Image className="absolute left-[15px] top-1/2 transform -translate-y-1/2" width={16} src={passwordLogo} alt="Password Logo" />
                        <input className="outline-none pl-12 w-full p-3" name="password_confirmation" type={showPasswordConfirmation ? 'password' : 'text'} id="password_confirmation" placeholder="Enter Your Password Confirmation" />
                        <div onClick={handlePasswordConfirmation}>
                            {showPasswordConfirmation ? (
                                <IoEyeOffOutline className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-second hover:text-black transition-all duration-300 ease-in-out cursor-pointer" />
                            ) : (
                                <IoEyeOutline className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-second hover:text-black transition-all duration-300 ease-in-out cursor-pointer" />
                            )}
                        </div>
                    </motion.div>
                    {state?.errors?.password_confirmation && <motion.span variants={childYDiv} className="text-red-500">{state.errors.password_confirmation[0]}</motion.span>}
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, scale: 0.5, }}
                    whileInView={{ opacity: 1, scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.8 }}
                    disabled={pending} className="bg-main rounded-md text-white py-3 w-[90%] mx-auto cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed">{
                        pending ? <span className="flex items-center gap-2 justify-center"><span className="loader"></span> Loading</span> : 'Sign Up'
                    }</motion.button>
            </div>
        </form>
    )
}
