import ContactForm from '@/components/ContactForm/ContactForm'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Contact() {
  return (
    <div className='p-[5px] @md:px-[10px] @md:py-[20px]'>
        <ContactForm/>
    </div>
  )
}
