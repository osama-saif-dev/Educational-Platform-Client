'use client';
import { motion } from "motion/react";
import Image from "next/image";
import CourseImage from '@/../public/Rectangle 34.png';
import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { childYDiv, parentDiv } from "@/services/ParentAndChildMotions";


const CourseImages = [
    { id: 1, src: CourseImage, name: 'C++', teacher: 'ahmed', desc: 'hello every body', price: 200, rate: 4.5, },
    { id: 2, src: CourseImage, name: 'Php', teacher: 'osama', desc: 'hello every body', price: 600, rate: 5, },
    { id: 3, src: CourseImage, name: 'Js', teacher: 'goo', desc: 'hello every body', price: 1000, rate: 3, },
    { id: 4, src: CourseImage, name: 'C', teacher: 'mariam', desc: 'hello every body', price: 5000, rate: 2, },
    { id: 5, src: CourseImage, name: 'Goo', teacher: 'maha', desc: 'hello every body', price: 3000, rate: 1.8, },
]

export default function WhishlistCard() {
    return (
        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8 my-12">
            {CourseImage && CourseImages.length > 0 && CourseImages.map((course) => (
                <motion.div variants={childYDiv} key={course.id} className="border border-otp rounded-md">
                    <div className="w-full relative">
                        <h1 className="absolute bottom-0 right-0 p-2  bg-orange text-white">10Lessons</h1>
                        <Image className="object-cover rounded-tl-md rounded-tr-md" src={course.src} width={800} height={200} alt="Course Image" />
                    </div>
                    <div className="p-2 mt-2">
                        <div className="flex justify-between">
                            <h1 className="text-[20px] font-semibold"><span className="text-orange font-bold">Course:</span> {course.name}</h1>
                            <h1 className="text-[20px] font-semibold"><span className="text-orange font-bold">Teacher:</span> {course.teacher}</h1>
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                            <p className="text-second">{course.desc}</p>
                            <h1 className="text-[20px] font-bold">{course.price} EGP</h1>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">{course.rate}</span>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <FaStar key={index}
                                        className={`${index < Math.floor(course.rate) ? 'text-orange' : 'text-second'}`}
                                    />
                                ))}
                                <AlertDialog >
                                    <AlertDialogTrigger className="ml-auto cursor-pointer">
                                        <IoMdHeart className=" text-[25px] text-orange" />
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete your course.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                                            <AlertDialogAction className="cursor-pointer">Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                            <button className="bg-main rounded-md block mx-auto cursor-pointer mt-2 px-8 py-2 text-white">Add To Cart</button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}
