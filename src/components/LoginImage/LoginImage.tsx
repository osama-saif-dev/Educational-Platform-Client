'use client';
import bg from '@/../public/sign In bg.png';
import mainImage from '@/../public/sign In image.png'
import Image from 'next/image';
import { motion } from 'motion/react';
import { childXDiv, childYDiv, parentDiv } from '@/services/ParentAndChildMotions';

export default function LoginImage({ h }: { h: string }) {
  return (
    <motion.div
      variants={parentDiv}
      initial='hidden'
      animate='visible'
      className={`hidden lg:flex lg:w-[50%] relative ${h}`}>
      <motion.div
        variants={childXDiv}
        className='w-full h-full absolute left-0 top-0'>
        <Image className='w-full h-full rounded-md' src={bg} width={200} alt='Bg_Image' />
      </motion.div>
      <motion.div
        variants={childYDiv}
        className='absolute w-full left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2'>
        <Image className='w-full rounded-md' src={mainImage} width={200} alt='Main_Image' />
      </motion.div>
    </motion.div>
  )
}
