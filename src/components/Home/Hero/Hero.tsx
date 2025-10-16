'use client';
import { motion } from "motion/react";
import Button from "../../Button/Button";
import HeroImages from "./HeroImages";
import { childYDiv, parentDiv } from "@/services/ParentAndChildMotions";

const paragraph = [
    { id: 1, title: 'Where we offer innovative and diverse educational courses to help develop your skills' },
    { id: 2, title: 'and achieve your professional and personal goals.' },
];

export default function Hero() {
    return (
        <div className="flex text-center lg:text-start justify-center items-center xl:items-center lg:gap-4 lg:justify-between bg-bg p-[20px] @md:px-[20px]">
            <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-2 xl:pl-[30px]">
                <motion.h1 variants={childYDiv} className="text-[30px] sm:text-[50px] md:text-[60px] lg:text-[50px] xl:text-[70px] font-bold">Welcome to <span className="text-main">Edu</span><span className="text-orange">Course</span></motion.h1>
                {paragraph && paragraph.map(p => (
                    <motion.p variants={childYDiv} key={p.id} className="md:leading-7 text-[14px] sm:text-[16px]">{p.title}</motion.p>
                ))}
                <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
                    <motion.div variants={childYDiv}>
                        <Button bg='bg-main' border={null} color="text-white" href="/courses" name="Enroll Now" />
                    </motion.div>
                    <motion.div variants={childYDiv}>
                        <Button bg='bg-white' border={null} color="text-main" href="/courses" name="Free Trial" />
                    </motion.div>
                </div>
            </motion.div>
            <HeroImages />
        </div>
    )
}
