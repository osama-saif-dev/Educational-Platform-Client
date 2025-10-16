'use client';
import React from 'react';
import { Star } from 'lucide-react';
import LineImage from '@/../public/Group 19.png';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from 'next/image';

export default function CourseRating() {
    return (
        <div className='w-full'>
            <div className='flex items-center justify-between mb-4 pb-4 border-b border-collapse'>
                <h1 className='font-bold'>Course Rating</h1>
                <Select>
                    <SelectTrigger className="w-[180px] focus:outline-none focus:border-none">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="max-h-60 overflow-y-auto transition-none">
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex items-center justify-between gap-6 border-b pb-4'>
                <div className='bg-bink p-4 flex flex-col items-center justify-center gap-3 basis-[40%]'>
                    <h1 className='font-bold text-[20px]'>4.6</h1>
                    <div className='flex gap-1'>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                            <Star className='text-main' key={index} />
                        ))}
                    </div>
                    <p>Overall Rating</p>
                </div>
                <div className='flex-1 h-full'>
                    <Image src={LineImage} width={500} alt='Line Image'/>
                </div>
            </div>
            {/* Add Starts Here For Every Course */}
        </div>
    );
}
