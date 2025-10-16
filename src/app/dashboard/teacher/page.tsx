'use client'
import Navbar from '@/components/Dashboard/Navbar'
import NumbersInformation from '@/components/Dashboard/NumbersInformation'
import React from 'react'
import frame1 from '@/../public/Frame 322 (1).png';
import frame2 from '@/../public/Frame 322 (2).png';
import frame3 from '@/../public/Frame 322 (3).png';
import frame4 from '@/../public/Frame 322 (4).png';
import frame5 from '@/../public/Frame 322.png';
import frame6 from '@/../public/Frame 323.png';
import frame7 from '@/../public/Frame 324.png';
import frame8 from '@/../public/Frame 325.png';
import LineChart from '@/components/Dashboard/LineChart';
import BarChart from '@/components/Dashboard/BarChart';
import CourseRating from '@/components/Dashboard/CourseRating';
import CourseOverView from '@/components/Dashboard/CourseOverView';

export default function page() {
  return (
   <div className='px-4'>
        <Navbar/>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-8 mt-8'>
          <NumbersInformation icon={frame5} number='957' title='Enrolled Courses'/> 
          <NumbersInformation icon={frame6} number='19' title='Active Courses'/> 
          <NumbersInformation icon={frame8} number='241' title='Course Instructors'/> 
          <NumbersInformation icon={frame7} number='951' title='Completed Courses'/> 
          <NumbersInformation icon={frame1} number='1,674' title='Students'/> 
          <NumbersInformation icon={frame2} number='3' title='Online Courses'/> 
          <NumbersInformation icon={frame3} number='7,461' title='Pound Total Earning'/> 
          <NumbersInformation icon={frame4} number='56' title='Course Sold'/> 
        </div>
        <div className='mt-16 grid md:grid-cols-2 gap-6 gap-y-16'>
            <LineChart/>
            <BarChart/>
            <CourseRating/>
            <CourseOverView/>
        </div>
    </div>
  )
}
