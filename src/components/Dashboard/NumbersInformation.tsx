'use client';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'motion/react';

interface InformationData {
    icon: StaticImageData,
    title: string,
    number: string
}

export default function NumbersInformation({ icon, title, number }: InformationData) {
    return (
        <motion.div initial={{ y: 0 }} whileHover={{ y: -5 }} transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut' }}
          className="flex items-center gap-3 p-5 bg-white shadow-sm">
            <Image src={icon} alt={title} width={40} height={40} className="object-contain" />
            <div>
                <h1 className="text-xl font-bold text-primary">{number}</h1>
                <p className="text-sm text-gray-500">{title}</p>
            </div>
        </motion.div>
    )
}
