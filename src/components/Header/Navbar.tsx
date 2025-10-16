'use client';
import Logo from '@/../public/Navbar_logo.png';
import Image from 'next/image';
import Links from './Links';
import ButtonsAndDropDown from './ButtonsAndDropDown';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname();
  return (
    <>
      {!pathName.startsWith('/dashboard') && (
        <div className={`transition-all duration-300 ease-in-out flex items-center justify-between p-3 px-8 rounded-md`}>
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: 'spring', damping: 20, stiffness: 20 }}
          >
            <Link href={'/'}>
              <Image src={Logo} width={100} height={100} alt='Edu Course' className='w-[70px] md:w-[100px]' />
            </Link>
          </motion.div>
          <Links />
          <ButtonsAndDropDown />
        </div>
      )}
    </>
  )
}
