'use client'
import { RootState } from '@/lib/store/store'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { Search, Bell  } from 'lucide-react';

export default function Navbar() {
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <div className='flex items-center justify-between p-4'>
            {user && (
                <>
                    <Image src={user?.image_url} alt={user?.first_name + user?.last_name}
                        width={50} priority height={50} className='cursor-pointer rounded-full' />
                    <div className='flex items-center gap-2 md:gap-4 w-[400px]'>
                        <div className='relative p-[10px] bg-bg flex gap-2 shadow-sm flex-1'>
                            <Search className='text-second w-[20px]' />
                            <input type="search" placeholder='Search' className='focus:outline-none w-full' />
                        </div>

                        {/* Notification Bell */}
                        <div className="relative">
                            <div className="p-[10px] bg-bg shadow-sm cursor-pointer">
                                <Bell  className="text-second" />
                                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full ring-2 bg-green-400 ring-white animate-pulse" />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
