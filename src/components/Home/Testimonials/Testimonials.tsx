'use client';
import { childYDiv, parentDiv } from "@/services/ParentAndChildMotions";
import { motion } from "motion/react";
import TestimonialsCard from "./TestimonialsCard";
export default function Testimonials() {
    return (
        <div className="my-10 md:my-20 px-[5px] md:px-0">
            <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }}
                className="flex flex-col gap-2 text-center">
                <motion.h6 variants={childYDiv} initial='hidden' whileInView='visible' viewport={{ once: true }}
                    className="text-main font-bold text-[20px] sm:text-[30px] md:text-[48px]">Student Testimonials</motion.h6>
                <motion.h1 variants={childYDiv} initial='hidden' whileInView='visible' viewport={{ once: true }}
                    className="font-bold text-[28px] sm:text-[38px] md:text-[58px]">What Students say?</motion.h1>
                <motion.p className="mt-4 text-[13px] sm:text-[16px]" variants={childYDiv} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                    We Provide a comprehensive learning experience with export instructors, flexible
                    learning options, and real-world applications.
                </motion.p>
            </motion.div>
            <TestimonialsCard/>
        </div>
    )
}
