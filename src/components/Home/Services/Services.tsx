'use client';
import { childYDiv, parentDiv } from "@/services/ParentAndChildMotions";
import { motion } from "motion/react";
import ServiceCard from "./ServiceCard";
import icon1 from '@/../public/Group 34.png';
import icon2 from '@/../public/Group 35.png';
import icon3 from '@/../public/Group 37.png';
import icon4 from '@/../public/Group 40.png';
const paragraph = [
    { id: 1, title: 'We are an educational platform that aims to provide professional  online courses in various fields, helping learners develop their skills and achieve their ambitions.' },
    { id: 2, title: 'We believe that education is the key to success, and we strive to make it accessible and easy for everyone.' }
];
export default function Services() {
    return (
        <div className="my-10 px-[5px] md:px-0">
            <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }}
                className="flex flex-col gap-2 text-center">
                <motion.h6 variants={childYDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} 
                className="text-main font-bold text-[20px] sm:text-[30px] md:text-[48px]">Why Choose Us</motion.h6>
                <motion.h1 variants={childYDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} 
                className="font-bold text-[28px] sm:text-[38px] md:text-[58px]">Why Learn with Us ?</motion.h1>
                {paragraph && paragraph.map(p => (
                    <motion.p className="mt-4 text-[13px] sm:text-[16px]" variants={childYDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} key={p.id}>{p.title}</motion.p>
                ))}
            </motion.div>
            <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} 
            className="flex items-center justify-center flex-wrap gap-10 mt-12">
                <ServiceCard image={icon1} title="Proven Track Record" p="With years of success and thousands of happy learners, our  experience speaks volumes." />
                <ServiceCard image={icon2} title="Innovative Learning" p="we apply modern educational techniques and tools to keep learning effective and up-to-date." />
                <ServiceCard image={icon3} title="Learner-Centric Approach" p="Every student matters. we tailor our support and resources to your personal journey." />
                <ServiceCard image={icon4} title="Ethical Values" p="Sustainability and responsibility guide everything we do - from content to community." />
            </motion.div>
        </div>
    )
}
