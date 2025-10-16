'use client';
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { RootState } from "@/lib/store/store";
import { AvatarDropDown } from "./AvatarDropDown";
import { IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { PiSignOutLight } from "react-icons/pi";
import Image from "next/image";
import { FaUserPlus } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { motion } from "motion/react";
import { childXRDiv, parentDiv } from "@/services/ParentAndChildMotions";
import { IoIosHeartEmpty } from "react-icons/io";
import { LogoutServer } from "@/services/Logout";
import { logout } from "@/lib/store/reducers/user";

const linksGroup = [
    { id: 1, href: '/', title: 'Home', icon: <FaHome /> },
    { id: 2, href: '/profile', title: 'Profile', icon: <CgProfile /> },
    { id: 3, href: '/about', title: 'About', icon: <FaSteam /> },
    { id: 4, href: '/cart', title: 'Cart', icon: <IoCartOutline /> },
    { id: 5, href: '/whishlist', title: 'Whishlist', icon: <IoMdHeart /> },
    { id: 6, href: '/contact', title: 'Contact', icon: <TiMessages /> },
    { id: 7, href: '/register', title: 'Sign Up', icon: <FaUserPlus /> },
    { id: 8, href: '/login', title: 'Sign In', icon: <FaUserEdit /> },
];

export default function ButtonsAndDropDown() {
    const user = useSelector((state: RootState) => state.auth.user);
    const [showNavigation, setShowNavigation] = useState<boolean>(false);
    const handleShowNavigation = () => setShowNavigation(prev => !prev);
    const pathName = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    
    const handleLogOut = () => {
        LogoutServer();
        dispatch(logout());
        router.replace('/login');
    }

    useEffect(() => {
        const unShowNavigation = () => setShowNavigation(false);
        window.addEventListener('click', unShowNavigation);
        return () => window.removeEventListener('click', unShowNavigation);
    }, []);

    return (
        <>
            {user ? (
                <motion.div variants={parentDiv} initial='hidden' animate='visible' className='hidden md:flex items-center gap-3'>
                    <motion.div variants={childXRDiv} whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                        <Link href={'/whishlist'}>
                            { pathName.startsWith('/whishlist') ? (
                                <IoMdHeart className="cursor-pointer text-main text-[25px]" />
                            ) : (
                                <IoIosHeartEmpty className="cursor-pointer text-second text-[25px]" />
                            ) }
                        </Link>
                    </motion.div>
                    <motion.div variants={childXRDiv} whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                        <Link href={'/cart'} className="relative">
                            <IoCartOutline className={`cursor-pointer text-[25px] ${pathName.startsWith('/cart') ? 'text-main' : 'text-second'}`} />
                            <span className="absolute right-[-7px] top-[-12px] rounded-full w-[15px] h-[15px] text-white bg-main flex leading-[1px] text-[12px] items-center justify-center">3</span>
                        </Link>
                    </motion.div>
                    <motion.div variants={childXRDiv}>
                        <AvatarDropDown user={user} />
                    </motion.div>
                </motion.div>
            ) : (
                <motion.div variants={parentDiv} initial='hidden' animate='visible' className="hidden md:flex items-center gap-4">
                    <motion.div variants={childXRDiv}>
                        <Button border={'main'} href={'/login'} bg={'bg-white'} color={'text-main'} name={'Sign In'} />
                    </motion.div>
                    <motion.div variants={childXRDiv}>
                        <Button border={null} href={'/register'} bg={'bg-main'} color={'text-white'} name={'Sign Up'} />
                    </motion.div>
                </motion.div>
            )}

            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 50, }}
                animate={{ opacity: 1, x: 0, }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20 }}
                className="md:hidden"
            >
                <FaList onClick={(e) => {
                    e.stopPropagation();
                    handleShowNavigation();
                }} className="text-[20px] cursor-pointer text-second hover:text-black transition-all duration-300 ease-in-out" />
            </motion.div>

            <AnimatePresence>

                {showNavigation && (

                    <motion.div
                        onClick={() => setShowNavigation(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, type: 'spring', damping: 30, stiffness: 200 }}
                        className="fixed left-0 top-0 w-full h-screen z-[1] bg-[#000000e8]">

                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="fixed right-0 top-0 h-full w-[300px] p-5 bg-[#e7ede8]">
                            <div className="flex items-center justify-between">
                                <h6 className="text-[30px] text-black font-bold">Navigation</h6>
                                <motion.div whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <IoClose onClick={(e) => {
                                        e.stopPropagation();
                                        handleShowNavigation();
                                    }
                                    } className="text-second hover:text-black transition-all duration-300 ease-in-out cursor-pointer text-[25px]" />
                                </motion.div>
                            </div>

                            <ul className='flex flex-col gap-6 mt-6 p-1'>
                                {linksGroup.map((link) => {
                                    if (!user && (link.href === '/cart' || link.href === '/whishlist' || link.href === '/contact' || link.href === '/profile')) {
                                        return null;
                                    }
                                    if (user && (link.href === '/login' || link.href === '/register')) {
                                        return null;
                                    }
                                    return (
                                        <Link
                                            href={link.href}
                                            onClick={() => setShowNavigation(false)}
                                            key={link.id}
                                            className="flex group items-center gap-4 transition-all duration-300 ease-in-out"
                                        >
                                            <div className={`${pathName === link.href ? 'text-main' : 'text-second group-hover:text-main'} transition-all duration-300 ease-in-out text-[25px]`}>
                                                {link.icon}
                                            </div>
                                            <span className={`${pathName === link.href ? 'text-main' : 'text-second group-hover:text-main'} font-semibold transition-all duration-300 ease-in-out text-[20px]`}>
                                                {link.title}
                                            </span>
                                            { link.href === '/cart' && (
                                                <span className="inline-block ml-auto transition-all duration-300 ease-in-out group-hover:text-main text-second">+3</span>
                                            ) }
                                        </Link>
                                    );
                                })}

                            </ul>
                            {user && (
                                <>
                                    <div onClick={() => setShowNavigation(false)} className="flex group items-center gap-4 cursor-pointer mt-[20px] p-1">
                                        <PiSignOutLight className={`text-second text-[25px] group-hover:text-main transition-all duration-300 ease-in-out`} />
                                        <span onClick={handleLogOut} className={`font-semibold text-second group-hover:text-main text-[20px] transition-all duration-300 ease-in-out`} >Sing Out</span>
                                    </div>
                                    <div className="fixed right-0 w-[300px] p-5 bottom-[5px] flex items-center gap-2">
                                        <Image src={user?.image_url} width={50} height={50} className="rounded-full" alt="User Image" />
                                        <div>
                                            <span>{user?.first_name + ' ' + user?.last_name}</span>
                                            <span className="block">{user?.email}</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}

            </AnimatePresence>
        </>
    )
}
