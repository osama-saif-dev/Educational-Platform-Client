import Link from 'next/link'
import React from 'react'
import googleLogo from '@/../public/Google.png';
import faceBookLogo from '@/../public/Facebook.png';
import Image from 'next/image';
import { motion } from 'motion/react';
import { childYDiv, parentDiv } from '@/services/ParentAndChildMotions';
export default function SocialMediaSignIn() {
  return (
    <>
      <motion.div
        variants={parentDiv}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className="relative my-4 flex items-center justify-between">
        <motion.span
          initial={{ opacity: 0, x: -50, }}
          whileInView={{ opacity: 1, x: 0, }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.3 }}
          className="flex-grow h-[1px] bg-second" />
        <motion.span
          initial={{ opacity: 0, y: 50, }}
          whileInView={{ opacity: 1, y: 0, }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.3 }}
          className="mx-4 font-bold text-second whitespace-nowrap">Or Continue With</motion.span>
        <motion.span
          initial={{ opacity: 0, x: 50, }}
          whileInView={{ opacity: 1, x: 0, }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.3 }}
          className="flex-grow h-[1px] bg-second" />
      </motion.div>
      <motion.div
        variants={parentDiv}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='flex flex-col gap-6'>
        <motion.div
          variants={childYDiv}
        >
          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/auth/google`} className='flex items-center justify-center gap-4 rounded-md p-2 border border-input'>
            <Image src={googleLogo} width={35} alt='Google Image' />
            <h6 className='text-offWhite'>Sign In with Google</h6>
          </Link>
        </motion.div>
        <motion.div
          variants={childYDiv}
        >
          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/auth/facebook`} className='flex items-center justify-center gap-4 rounded-md p-2 border border-input'>
            <Image src={faceBookLogo} width={35} alt='FaceBook Image' />
            <h6 className='text-offWhite'>Sign In with FaceBook</h6>
          </Link>

        </motion.div>
      </motion.div>
    </>
  )
}
