import AuthTitle from '@/components/AuthTitle/AuthTitle'
import LoginImage from '@/components/LoginImage/LoginImage'
import RegisterForm from '@/components/RegisterForm/RegisterForm'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <div className='flex mt-[50px] gap-16 p-[5px] @md:px-[50px] @md:py-[20px]'>
        <LoginImage h={'h-[1050px]'}/>
        <div className='flex-1'>
          <AuthTitle size='text-[80px] sm:text-[90px]' title='Sign Up' p='Fill your information below or register with yor account'/>
          <RegisterForm/>
        </div>
    </div>
  )
}
