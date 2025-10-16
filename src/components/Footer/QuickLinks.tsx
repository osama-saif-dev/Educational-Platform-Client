'use client';
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { childYDiv, parentDiv } from '@/services/ParentAndChildMotions'

export default function QuickLinks() {
  return (
    <div className='mt-5 md:mt-10 flex justify-center'>
      <motion.div
        variants={parentDiv}
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
      >
        <motion.h1
          variants={childYDiv}
          className='text-bold mb-4 md:mb-8 text-[20px] sm:text-[28px] font-bold text-center md:text-start'>QUICK LINKS</motion.h1>
        <motion.ul
          variants={parentDiv}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          className='flex flex-row flex-wrap justify-center md:justify-start md:flex-col gap-4 text-[16px] sm:text-[20px]'>
          <motion.div
            variants={childYDiv}
          >
            <Link href={'/login'}>Sign In</Link>
          </motion.div>
          <motion.div
            variants={childYDiv}
          >
            <Link href={'/register'}>Sign Up</Link>
          </motion.div>
          <motion.div
            variants={childYDiv}
          >
            <Link href={'/profile'}>Profile</Link>
          </motion.div>
          <motion.div
            variants={childYDiv}
          >
            <Link href={'/about'}>About</Link>
          </motion.div>
          <motion.div
            variants={childYDiv}
          >
            <Link href={'/courses'}>Courses</Link>
          </motion.div>
        </motion.ul>
      </motion.div>
    </div>
  )
}
