'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Categorystyles.css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import { motion } from 'motion/react';
import { childYDiv, parentDiv } from '@/services/ParentAndChildMotions';

const CategoriesData = [
    { id: 1, title: 'one', icon: 'New Icon' },
    { id: 2, title: 'two', icon: 'New Icon' },
    { id: 3, title: 'three', icon: 'New Icon' },
    { id: 4, title: 'four', icon: 'New Icon' },
    { id: 5, title: 'five', icon: 'New Icon' },
    { id: 6, title: 'six', icon: 'New Icon' },
];

export default function Categories() {
    return (
        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className='px-8 my-[50px]'>
            <motion.h1 variants={childYDiv} className='text-center sm:text-start text-[30px] sm:text-[40px] md:text-[50px] font-bold text-second'>Categories</motion.h1>
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
                      slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                      },
                  }}
                navigation= {true}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                { CategoriesData && CategoriesData.map((cat) => (
                    <SwiperSlide className='border border-input mb-6 cursor-pointer hover:bg-main hover:text-white transition-all duration-500 ease-linear' key={cat.id}>
                        <span>{cat.icon}</span>
                        <h1>{cat.title}</h1>
                    </SwiperSlide>
                ))}
            </Swiper>
            </motion.div>
        </motion.div>
    )
}
