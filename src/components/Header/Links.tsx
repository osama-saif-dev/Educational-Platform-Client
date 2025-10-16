'use client';
import { RootState } from '@/lib/store/store';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { motion } from 'motion/react';
import { childYDiv, parentDiv } from '@/services/ParentAndChildMotions';

const linksGroup = [
    { id: 1, href: '/', title: 'Home' },
    { id: 2, href: '/about', title: 'About' },
    { id: 3, href: '/courses', title: 'Courses' },
    { id: 4, href: '/contact', title: 'Contact' },
];

export default function Links() {
    const pathName = usePathname();
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <motion.ul variants={parentDiv} initial='hidden' animate='visible' className='hidden md:flex items-center gap-8'>
            { linksGroup && linksGroup.map((link) => {
                if (!user && link.href === '/contact') return;

                return (
                    <motion.div variants={childYDiv}
                        whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, ease: 'linear' }} key={link.id}>
                        <Link className={`${ pathName === link.href ? 'text-main' : 'text-second' } hover:text-main font-semibold transition-all duration-300 ease-in-out`} href={link.href}>
                            {link.title}
                        </Link>
                    </motion.div>
                )
            }
            ) }
        </motion.ul>
    )
}
