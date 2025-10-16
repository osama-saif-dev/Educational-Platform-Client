'use client';
import { useActionState, useEffect } from "react";
import emailLogo from '@/../public/Vector.png';
import { motion } from "motion/react";
import { toast } from "react-toastify";
import { IForgetPasswordData } from "@/types/ForgetPassword";
import ForgetPasswordAction from "@/services/ForgetPassword/ForgetPasswordAction";
import Image from "next/image";
import { childXDiv, childYDiv, parentDiv } from "@/services/ParentAndChildMotions";

const initialState = {
  data: null,
  errors: null,
  success: false,
  message: '',
}

export default function ForgetPasswordForm() {
  const [state, action, pending] = useActionState<IForgetPasswordData, FormData>(ForgetPasswordAction, initialState);

  useEffect(() => {
    if (state?.success && state?.message) {
      toast.success(state?.message);
    }
  }, [state]);


  return (
    <form action={action} className="mt-8">
      <div className="flex flex-col gap-4">
        <motion.div variants={parentDiv} initial='hidden' animate='visible' className="flex flex-col gap-2">
          <motion.label variants={childXDiv} htmlFor="email" className="cursor-pointer">Email</motion.label>
          <motion.div variants={childYDiv} className="relative rounded-md border border-input">
            <Image className="absolute left-[15px] top-1/2 transform -translate-y-1/2" width={20} src={emailLogo} alt="User Logo" />
            <input defaultValue={state?.data?.email} className="outline-none pl-12 w-full p-3" name="email" type="email" id="email" placeholder="Enter Your Email" />
          </motion.div>
          {state?.errors?.email && <motion.span variants={childYDiv} className="text-red-500">{state.errors.email[0]}</motion.span>}
        </motion.div>
        <motion.button initial={{ opacity: 0, scale: 0.5, }}
          whileInView={{ opacity: 1, scale: [0.8, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.8 }} disabled={pending} className="bg-main rounded-md text-white py-3 w-[90%] mx-auto cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed">{
            pending ? <span className="flex items-center gap-2 justify-center"><span className="loader"></span> Loading</span> : 'Countinue'
          }</motion.button>
      </div>
    </form>
  )
}
