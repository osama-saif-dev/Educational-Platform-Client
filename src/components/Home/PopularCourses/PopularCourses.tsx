'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Popularstyles.css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import CourseImage from '@/../public/Rectangle 34.png';
import { motion } from 'motion/react';
import { childYDiv, parentDiv } from '@/services/ParentAndChildMotions';
import { FaStar } from "react-icons/fa";
import Image from 'next/image';

const CourseImages = [
    { id: 1, src: CourseImage, name: 'C++', teacher: 'ahmed', desc: 'hello every body', price: 200, rate: 4.5, },
    { id: 2, src: CourseImage, name: 'Php', teacher: 'osama', desc: 'hello every body', price: 600, rate: 5, },
    { id: 3, src: CourseImage, name: 'Js', teacher: 'goo', desc: 'hello every body', price: 1000, rate: 3, },
    { id: 4, src: CourseImage, name: 'C', teacher: 'mariam', desc: 'hello every body', price: 5000, rate: 2, },
    { id: 5, src: CourseImage, name: 'Goo', teacher: 'maha', desc: 'hello every body', price: 3000, rate: 1.8, },
]

export default function PopularCourses() {
    return (
        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className='px-8 my-[50px]'>
            <motion.h1 variants={childYDiv} className='text-center sm:text-start text-[30px] sm:text-[40px] md:text-[50px] font-bold text-second'>Popular Courses</motion.h1>
            <motion.div variants={childYDiv}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={false}
                    slidesPerView={3}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        waitForTransition: true
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1300: {
                            slidesPerView: 4,
                        }
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="popularSwiper"
                >
                    {CourseImages && CourseImages.map((course) => (
                        <SwiperSlide className='mb-6 cursor-pointer border border-input' key={course.id}>
                            <div className="w-full relative h-full">
                                <h1 className="absolute bottom-0 right-0 p-1 bg-orange text-white">10Lessons</h1>
                                <Image className="object-cover w-full h-[150px]" src={course.src} width={200} height={150} alt="Course Image" />
                            </div>
                            <div className="p-2 w-full">
                                <div className="flex flex-col md:flex-row justify-between">
                                    <h1 className="md:text-[20px] md:font-semibold"><span className="text-orange md:font-bold">Course:</span> {course.name}</h1>
                                    <h1 className="md:text-[20px] md:font-semibold"><span className="text-orange md:font-bold">Teacher:</span> {course.teacher}</h1>
                                </div>
                                <div className="flex flex-col gap-1 mt-2">
                                    <p className="text-second text-[14px] md:text-[16px]">{course.desc}</p>
                                    <h1 className="text-[20px] md:font-bold">{course.price} EGP</h1>
                                    <div className="flex items-center gap-1">
                                        <span className="md:font-bold">{course.rate}</span>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <FaStar key={index}
                                                className={`${index < Math.floor(course.rate) ? 'text-orange' : 'text-second'}`}
                                            />
                                        ))}
                                    </div>
                                    <button className="bg-main rounded-md block mx-auto cursor-pointer mt-2 px-8 py-2 text-white">Add To Cart</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </motion.div>
    )
}
