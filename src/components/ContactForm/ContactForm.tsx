'use client';
import { childXDiv, childXRDiv, childYDiv, parentDiv } from "@/services/ParentAndChildMotions";
import { motion } from "motion/react";
import Image from "next/image";
import { useActionState, useEffect } from "react";
import userLogo from '@/../public/User.png';
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { IContactData } from "@/types/ContactForm";
import ContactAction from "@/services/Contact/ContactAction";
import emailLogo from '@/../public/Vector.png';
import { AiFillMessage } from "react-icons/ai";
import { toast } from "react-toastify";

const initialState = {
    data: null,
    errors: {},
    success: false,
    message: ''
}

export default function ContactForm() {
    const user = useSelector((state: RootState) => state.auth.user);
    const access_token = useSelector((state: RootState) => state.auth.access_token);
    const [state, action, pending] = useActionState<IContactData, FormData>(
        (prevState, formData) => ContactAction(prevState, formData, access_token), initialState);
    useEffect(() => {
        if (state?.message && state?.success) {
            toast.success(state?.message);
        }
    }, [state?.message, state?.success]);
    return (
        <div className="flex flex-col gap-10 w-full sm:w-[90%] mx-auto mt-2">
            <motion.div className="flex flex-col gap-2 text-center" variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                <motion.h1 className="text-[55px] sm:text-[90px] font-bold text-main" variants={childYDiv}>Contact Us</motion.h1>
                <motion.p variants={childYDiv}>We’d love to hear from you, Please fill out this form.</motion.p>
            </motion.div>
            <form action={action}>
                <div className="flex flex-col gap-4">

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-2 w-full">
                            <motion.label variants={childXDiv} htmlFor="first_name" className="cursor-pointer">First Name</motion.label>
                            <motion.div variants={childXDiv} className="relative rounded-md border border-input bg-[#f9f9f9]">
                                <Image className="absolute left-[13px] top-1/2 transform -translate-y-1/2 opacity-30" width={20} src={userLogo} alt="User Logo" />
                                <input name="first_name" defaultValue={user?.first_name} className="outline-none pl-12 w-full p-3 cursor-not-allowed opacity-30" readOnly type="text" id="first_name" />
                            </motion.div>
                            {state?.errors?.first_name && <motion.span variants={childXDiv} initial="hidden"
                                animate="visible" className="text-red-500 opacity-[1]">{state.errors.first_name[0]}</motion.span>}
                        </motion.div>

                        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-2 w-full">
                            <motion.label variants={childXRDiv} htmlFor="last_name" className="cursor-pointer">Last Name</motion.label>
                            <motion.div variants={childXRDiv} className="relative rounded-md border border-input bg-[#f9f9f9]">
                                <Image className="absolute left-[13px] top-1/2 transform -translate-y-1/2 opacity-30" width={20} src={userLogo} alt="User Logo" />
                                <input defaultValue={user?.last_name} className="outline-none pl-12 w-full p-3 cursor-not-allowed opacity-30" name="last_name" readOnly type="text" id="last_name" />
                            </motion.div>
                            {state?.errors?.last_name && <motion.span variants={childXDiv} initial="hidden"
                                animate="visible" className="text-red-500">{state.errors.last_name[0]}</motion.span>}
                        </motion.div>
                    </div>

                    <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-2">
                        <motion.label variants={childYDiv} htmlFor="email" className="cursor-pointer">Email</motion.label>
                        <motion.div variants={childYDiv} className="relative rounded-md border border-input bg-[#f9f9f9]">
                            <Image className="absolute left-[15px] top-1/2 transform -translate-y-1/2 opacity-30" width={16} src={emailLogo} alt="Email Logo" />
                            <input defaultValue={user?.email} className="outline-none pl-12 w-full p-3 cursor-not-allowed opacity-30" readOnly name="email" type="email" id="email" />
                        </motion.div>
                        {state?.errors?.email && <motion.span variants={childXDiv} initial="hidden"
                            animate="visible" className="text-red-500">{state.errors.email[0]}</motion.span>}
                    </motion.div>

                    <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-2">
                        <motion.label variants={childYDiv} className="cursor-pointer" htmlFor="message">Message</motion.label>
                        <motion.div variants={childYDiv} className="relative rounded-md border border-input w-full h-[150px]">
                            <AiFillMessage className="absolute left-[15px] top-[24px] text-[20px] font-bold transform -translate-y-1/2 text-second" />
                            <textarea name="message" className="pl-10 w-full p-3 h-full resize-none outline-none" id="message" placeholder="Type Your Message"></textarea>
                        </motion.div>
                        {state?.errors?.message && <motion.span variants={childXDiv} initial="hidden"
                            animate="visible" className="text-red-500">{state.errors.message[0]}</motion.span>}
                    </motion.div>

                    <motion.button initial={{ opacity: 0, scale: 0.5, }}
                        whileInView={{ opacity: 1, scale: [0.8, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.8 }} disabled={pending} className="bg-main rounded-md text-white py-3 px-6 md:w-[30%] mx-auto cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed">{
                            pending ? <span className="flex items-center gap-2 justify-center"><span className="loader"></span> Loading</span> : 'Send Message'
                        }</motion.button>
                </div>
            </form>
        </div>
    )
}
