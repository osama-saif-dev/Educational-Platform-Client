'use client';
import { childYDiv, parentDiv } from "@/services/ParentAndChildMotions";
import { motion } from "motion/react";
export default function AuthTitle({ title, p, size }: { title: string, p: string, size: string }) {
  return (
    <motion.div
      variants={parentDiv}
      initial='hidden'
      animate='visible'
      className='text-center'>
      <motion.h1
        variants={childYDiv}
        className={`font-bold text-black opacity-80 ${size}`}>
        {title}
      </motion.h1>
      <motion.p
        variants={childYDiv}
        className='text-second'>{p}</motion.p>
    </motion.div>
  )
}
