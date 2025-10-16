import AuthTitle from '@/components/AuthTitle/AuthTitle'
import ResetPasswordForm from '@/components/ResetPasswordForm/ResetPasswordForm'
import ResetPasswordImage from '@/components/ResetPasswordImage/ResetPasswordImage'
import React, { Suspense } from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
};

export default function ResetPassword() {
  return (
     <div className='flex items-center mt-[50px] gap-16 p-[5px] @md:px-[50px] @md:py-[20px]'>
       <ResetPasswordImage />
       <div className='flex-1'>
         <AuthTitle size='text-[50px] sm:text-[60px] lg:text-[50px] xl:text-[60px]' title='Reset Password' p='' />
         <Suspense fallback={<div>Loading...</div>}>
          <ResetPasswordForm />
         </Suspense>
       </div>
     </div>
  )
}
