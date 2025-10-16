import AuthTitle from '@/components/AuthTitle/AuthTitle'
import VerifyForm from '@/components/VerifyForm/VerifyForm';
import VerifyImage from '@/components/VerifyImage/VerifyImage'
import { cookies } from 'next/headers'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Code",
};

export default async function VerifyCode() {
  const cookieStore = await cookies();
  const email = cookieStore.get('email')?.value;

  return (
    <div className='flex items-center mt-[50px] gap-16 p-[5px] @md:px-[50px] @md:py-[20px]'>
        <VerifyImage/>
        <div className='flex-1'>
          <AuthTitle size='text-[60px] sm:text-[90px] lg:text-[70px] xl:text-[90px]' title='Verify Code' p={`lease enter the 5-digit code sent to your email ${email} for verifation.`}/>
          <VerifyForm/>
        </div>
    </div>
  )
}
