'use client';
import { useActionState, useEffect, useState } from "react";
import userLogo from '@/../public/User.png';
import emailLogo from '@/../public/Vector.png';
import passwordLogo from '@/../public/Vector (1).png';
import Image from "next/image";
import SocialMediaSignIn from "../SocialMediaSignIn/SocialMediaSignIn";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { IRegisterData } from "@/types/Register";
import RegisterAction from "@/services/Register/RegisterAction";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { motion } from "motion/react";
import { childYDiv, parentDiv } from "@/services/ParentAndChildMotions";

const initialState = {
  data: null,
  errors: {},
  success: false,
  message: ''
}

export default function RegisterForm() {
  const [state, action, pending] = useActionState<IRegisterData, FormData>(RegisterAction, initialState);
  const router = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState<boolean>(true);
  const handlePassword = () => setShowPassword(prev => !prev);
  const handlePasswordConfirmation = () => setShowPasswordConfirmation(prev => !prev);

  useEffect(() => {
    if (state?.success && state?.message) {
      toast.success(state?.message);
      router.replace('/verify');
    }
    console.log(state?.errors)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <form action={action} className="mt-8">
      <div className="flex flex-col gap-4">
        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-2">
          <motion.label variants={childYDiv} htmlFor="first_name" className="cursor-pointer">First Name</motion.label>
          <motion.div variants={childYDiv} className="relative rounded-md border border-input">
            <Image className="absolute left-[13px] top-1/2 transform -translate-y-1/2" width={20} src={userLogo} alt="User Logo" />
            <input defaultValue={state?.data?.first_name} className="outline-none pl-12 w-full p-3" name="first_name" type="text" id="first_name" placeholder="Enter Your First Name" />
          </motion.div>
          {state?.errors?.first_name && <motion.span variants={childYDiv} initial="hidden"
            animate="visible" className="text-red-500">{state.errors.first_name[0]}</motion.span>}
        </motion.div>
        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-2">
          <motion.label variants={childYDiv} htmlFor="last_name" className="cursor-pointer">Last Name</motion.label>
          <motion.div variants={childYDiv} className="relative rounded-md border border-input">
            <Image className="absolute left-[13px] top-1/2 transform -translate-y-1/2" width={20} src={userLogo} alt="User Logo" />
            <input defaultValue={state?.data?.last_name} className="outline-none pl-12 w-full p-3" name="last_name" type="text" id="last_name" placeholder="Enter Your Last Name" />
          </motion.div>
          {state?.errors?.last_name && <motion.span variants={childYDiv} initial="hidden"
            animate="visible" className="text-red-500">{state.errors.last_name[0]}</motion.span>}
        </motion.div>
        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-2">
          <motion.label variants={childYDiv} htmlFor="email" className="cursor-pointer">Email</motion.label>
          <motion.div variants={childYDiv} className="relative rounded-md border border-input">
            <Image className="absolute left-[15px] top-1/2 transform -translate-y-1/2" width={16} src={emailLogo} alt="User Logo" />
            <input defaultValue={state?.data?.email} className="outline-none pl-12 w-full p-3" name="email" type="email" id="email" placeholder="Enter Your Email" />
          </motion.div>
          {state?.errors?.email && <motion.span variants={childYDiv} initial="hidden"
            animate="visible" className="text-red-500">{state.errors.email[0]}</motion.span>}
        </motion.div>
        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-2">
          <motion.label variants={childYDiv} htmlFor="password" className="cursor-pointer">Password</motion.label>
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
          {state?.errors?.password && <motion.span variants={childYDiv} initial="hidden"
            animate="visible" className="text-red-500">{state.errors.password[0]}</motion.span>}
        </motion.div>
        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-2">
          <motion.label variants={childYDiv} htmlFor="password_confirmation" className="cursor-pointer">Password Confirmation</motion.label>
          <motion.div variants={childYDiv} className="relative rounded-md border border-input">
            <Image className="absolute left-[15px] top-1/2 transform -translate-y-1/2" width={16} src={passwordLogo} alt="Password Logo" />
            <input className="outline-none pl-12 w-full p-3" name="password_confirmation" type={showPasswordConfirmation ? 'password' : 'text'} id="password_confirmation" placeholder="Enter Password Confirmation" />
            <div onClick={handlePasswordConfirmation}>
              {showPasswordConfirmation ? (
                <IoEyeOffOutline className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-second hover:text-black transition-all duration-300 ease-in-out cursor-pointer" />
              ) : (
                <IoEyeOutline className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-second hover:text-black transition-all duration-300 ease-in-out cursor-pointer" />
              )}
            </div>
          </motion.div>
          {state?.errors?.password_confirmation && <motion.span variants={childYDiv} initial="hidden"
            animate="visible" className="text-red-500">{state.errors.password_confirmation[0]}</motion.span>}
        </motion.div>
        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex items-center gap-4">
          <motion.label variants={childYDiv} htmlFor="terms" className="cursor-pointer flex gap-3">
            <input type="checkbox" id="terms" />
            <h6 id="terms">I agree with <span className="text-orange">Terms of Use</span> and <span className="text-orange">Privacy Policy</span></h6>
          </motion.label>
        </motion.div>
        <motion.button initial={{ opacity: 0, scale: 0.5, }}
          whileInView={{ opacity: 1, scale: [0.8, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.8 }} disabled={pending} className="bg-main rounded-md text-white py-3 w-[90%] mx-auto cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed">{
            pending ? <span className="flex items-center gap-2 justify-center"><span className="loader"></span> Loading</span> : 'Sign Up'
          }</motion.button>
        <SocialMediaSignIn />
      </div>
    </form>
  )
}
