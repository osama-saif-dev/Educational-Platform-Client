'use client'
import Image from 'next/image'
import React from 'react'
import SocialMedia from './SocialMedia'
import eduCourse from '@/../public/Footer_logo.png';
import faceBookLogo from '@/../public/face.png';
import twitterLogo from '@/../public/Twitter Bird.png';
import LinkedInLogo from '@/../public/LinkedIn.png';
import youtubeLogo from '@/../public/YouTube.png';
import instgramLogo from '@/../public/Instagram.png';
import { motion } from 'motion/react';
import { childXDiv, childYDiv, parentDiv } from '@/services/ParentAndChildMotions';

export default function Content() {
  return (
    <motion.div
      variants={parentDiv}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='flex items-center md:items-start text-center md:text-start flex-col gap-4'>
      <motion.div
        variants={childYDiv}
      >
        <Image src={eduCourse} width={214} alt='Edu Course' />
      </motion.div>
      <motion.p
        variants={childYDiv}
        className='wrap-break-word leading-[30px] text-[14px] sm:text-[16px]'>Lorem ipsum dolor sit amet consectetur. Eu turpis nibh tristique senectus amet pulvinar. In porta sodales varius aliquet. Praesent libero duis ut in phasellus. Tellus amet consecte
        Lorem ipsum dolor sit amet consinar. In porta sodales varius aliquet. Praesent libero duis ut in phasellus. Tellus amet consecte</motion.p>
      <motion.div
        variants={parentDiv}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.span
          variants={childXDiv}
          className='font-bold text-[20px] sm:text-[28px] inline-block'>Contact Us</motion.span>
        <motion.div
          variants={parentDiv}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='flex items-center gap-4 mt-2'>
          <motion.div
            variants={childXDiv}
          >
            <SocialMedia href='' alt='FaceBook Image' src={faceBookLogo} />
          </motion.div>
          <motion.div
            variants={childXDiv}
          >
          <SocialMedia href='' alt='Instagram Image' src={instgramLogo} />
          </motion.div>
          <motion.div
            variants={childXDiv}
          >
          <SocialMedia href='' alt='Linked In Image' src={LinkedInLogo} />
          </motion.div>
          <motion.div
            variants={childXDiv}
          >
          <SocialMedia href='' alt='Twitter Image' src={twitterLogo} />
          </motion.div>
          <motion.div
            variants={childXDiv}
          >
          <SocialMedia href='' alt='Youtube Image' src={youtubeLogo} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
