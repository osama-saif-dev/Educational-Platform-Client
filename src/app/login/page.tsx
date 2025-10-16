import AuthTitle from '@/components/AuthTitle/AuthTitle'
import LoginForm from '@/components/LoginForm/LoginForm'
import LoginImage from '@/components/LoginImage/LoginImage'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div className='flex mt-[50px] gap-16 p-[5px] @md:px-[50px] @md:py-[20px]'>
        <LoginImage h='h-[750px]'/>
        <div className='flex-1'>
          <AuthTitle size='text-[80px] sm:text-[90px]' title='Sign In' p='Hi , Please log in to access your account.'/>
          <LoginForm/>
        </div>
    </div>
  )
}
