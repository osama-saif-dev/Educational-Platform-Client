'use client'
import React, { useActionState, useEffect, useState } from 'react'
import SocialMediaSignIn from '../SocialMediaSignIn/SocialMediaSignIn'
import Image from 'next/image';
import emailLogo from '@/../public/Vector.png';
import passwordLogo from '@/../public/Vector (1).png';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import Link from 'next/link';
import { ILoginData } from '@/types/Login';
import LoginAction from '@/services/Login/LoginAction';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/lib/store/reducers/user';
import { motion } from "motion/react";
import { childYDiv, parentDiv } from '@/services/ParentAndChildMotions';

const initialState = {
    data: null,
    errors: {},
    success: false,
    access_token: '',
    user: null,
    message: ''
}
export default function LoginForm() {
    const [state, action, pending] = useActionState<ILoginData, FormData>(LoginAction, initialState);
    const dispatch = useDispatch();
    const router = useRouter();

    const [showPassword, setShowPassword] = useState<boolean>(true);
    const handlePassword = () => setShowPassword(prev => !prev);

    useEffect(() => {
        if (state?.message && !state?.success) {
            toast.error(state?.message);
            if (state?.message == 'You Must Verify Your Email' && !state?.success) {
                router.replace('/verify');
            }
        } else if (state?.message && state?.success && state?.user && state?.access_token) {
            dispatch(setCredentials({ user: state?.user, access_token: state?.access_token }))
            // dispatch(showUser(true));
            toast.success(state?.message);
            router.replace('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <form action={action} className="mt-8">
            <div className="flex flex-col gap-4">
                <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-2">
                    <motion.label initial={{ opacity: 0, x: -50, }} whileInView={{ opacity: 1, x: 0, }} viewport={{ once: true }} transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.2 }} htmlFor="email" className="cursor-pointer">Email</motion.label>
                    <motion.div initial={{ opacity: 0, y: 50, }} whileInView={{ opacity: 1, y: 0, }} viewport={{ once: true }} transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.4 }} className="relative rounded-md border border-input">
                        <Image className="absolute left-[15px] top-1/2 transform -translate-y-1/2" width={16} src={emailLogo} alt="User Logo" />
                        <input defaultValue={state?.data?.email} className="outline-none pl-12 w-full p-3" name="email" type="email" id="email" placeholder="Enter Your Email" />
                    </motion.div>
                    {state?.errors?.email && <motion.span variants={childYDiv} className="text-red-500">{state.errors.email[0]}</motion.span>}
                </motion.div>

                <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-2">
                    <motion.label initial={{ opacity: 0, x: -50, }} whileInView={{ opacity: 1, x: 0, }} viewport={{ once: true }} transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.8 }} htmlFor="password" className="cursor-pointer">Password</motion.label>
                    <motion.div initial={{ opacity: 0, y: 50, }} whileInView={{ opacity: 1, y: 0, }} viewport={{ once: true }} transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.6 }} className="relative rounded-md border border-input">
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

                <motion.div variants={parentDiv}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className="flex items-center justify-between my-2">
                    <motion.label
                        initial={{ opacity: 0, x: -50, }}
                        whileInView={{ opacity: 1, x: 0, }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.6 }}
                        htmlFor="remember" className="cursor-pointer flex gap-1 md:gap-3">
                        <input type="checkbox" id="remember" />
                        <span id="remember">Remember Me</span>
                    </motion.label>
                    <motion.div
                        initial={{ opacity: 0, x: 60, }}
                        whileInView={{ opacity: 1, x: 0, }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.6 }}
                    >
                        <Link className="text-orange" href={'/forget-password'}>Forget Password?</Link>
                    </motion.div>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, scale: 0.5, }}
                    whileInView={{ opacity: 1, scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.8 }}
                    disabled={pending} className="bg-main rounded-md text-white py-3 w-[90%] mx-auto cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed">{
                        pending ? <span className="flex items-center gap-2 justify-center"><span className="loader"></span> Loading</span> : 'Sign In'
                    }</motion.button>

                <SocialMediaSignIn />
            </div>
        </form>
    )
}
