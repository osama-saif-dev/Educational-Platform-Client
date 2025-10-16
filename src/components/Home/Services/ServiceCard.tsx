'use client';
import { childYDiv } from "@/services/ParentAndChildMotions";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
interface ICardData {
    image: StaticImageData,
    title: string,
    p: string
}
export default function ServiceCard({ image, title, p } : ICardData) {
  return (
    <motion.div variants={childYDiv}
    className="border border-input rounded-md flex flex-col gap-4 text-center items-center md:basis-[40%] p-5"
    >
        <Image src={image} width={60} alt="Service Image"/>
        <h1 className="text-[20px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-bold">{title}</h1>
        <p className="text-[13px] md:text-[16px]  sm:w-[400px]">{p}</p>
    </motion.div>
  )
}
