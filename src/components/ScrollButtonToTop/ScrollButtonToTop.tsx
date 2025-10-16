'use client';
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowBigUp } from 'lucide-react';

export default function ScrollButtonToTop() {
    const [show, setShowButton] = useState<boolean>(false);

    useEffect(() => {
        const buttonEvent = () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            window.scrollY >= 400 ? setShowButton(true) : setShowButton(false);
        }
        window.addEventListener('scroll', buttonEvent)
        return () => window.removeEventListener('scroll', buttonEvent);
    }, [])

    const handleClick = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            initial={{ y: 50, opacity: 0 }}
            exit={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 70, damping: 100 }}
            onClick={handleClick} type="button" className={`${show && 'fixed right-[50px] bottom-[50px] w-[40px] h-[40px] z-10 cursor-pointer bg-input rounded-full flex items-center justify-center shadow-sm'}`}>
            <ArrowBigUp className="text-main"/>
        </motion.button>
    )
}
