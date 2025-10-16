'use client';
import { motion } from "motion/react";
import HeroOne from '@/../public/Ellipse 1.png';
import HeroTwo from '@/../public/Ellipse 2.png';
import HeroThree from '@/../public/Ellipse 3.png';
import Image from "next/image";
import { childXDiv, childXRDiv, parentDiv } from "@/services/ParentAndChildMotions";

export default function HeroImages() {
    return (
        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} 
        className="hidden lg:flex items-center gap-2 xl:gap-6 xl:pr-[30px]">
            <motion.div variants={childXDiv}>
                <Image className="rounded-full" src={HeroTwo} width={200} height={200} alt='Hero Two' />
            </motion.div>
            <div className="flex flex-col gap-2 xl:gap-6">
                <motion.div variants={childXRDiv}>
                    <Image className="rounded-full" src={HeroOne} width={200} height={200} alt='Hero One' />
                </motion.div>
                <motion.div variants={childXRDiv}>
                    <Image className="rounded-full" src={HeroThree} width={200} height={200} alt='Hero Three'/>
                </motion.div>
            </div>
        </motion.div>
    )
}
