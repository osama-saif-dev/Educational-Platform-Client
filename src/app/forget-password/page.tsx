import AuthTitle from '@/components/AuthTitle/AuthTitle'
import ForgetPasswordForm from '@/components/ForgetPasswordForm/ForgetPasswordForm'
import VerifyImage from '@/components/VerifyImage/VerifyImage'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forget Password",
};

export default function ForgetPassword() {
  return (
    <div className='flex items-center mt-[50px] gap-16 p-[5px] @md:px-[50px] @md:py-[20px]'>
      <VerifyImage />
      <div className='flex-1'>
        <AuthTitle size='text-[40px] sm:text-[60px] lg:text-[50px] xl:text-[60px]' title='Forget Password' p='Enter your Registration Email Below to receive password reset instruction' />
        <ForgetPasswordForm />
      </div>
    </div>
  )
}
