import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search } from 'lucide-react'
import React from 'react'

export default function SearchAndSortCourses() {
    return (
        <div className='flex items-center justify-between mt-8'>
            {/* Search */}
            <div className='flex flex-col gap-3'>
                <label htmlFor="search" className='text-second'>Search:</label>
                <div className='relative p-[10px] bg-bg flex gap-2 shadow-sm flex-1'>
                    <Search className='text-second w-[20px]' />
                    <input type="search" placeholder='Search' className='focus:outline-none w-full' id='search' />
                </div>
            </div>

            {/* Right Filter */}
            <div className='flex items-center justify-between'>
                {/* Sort By */}
                <div className="flex flex-col gap-3">
                    <label className='text-second'>Sort By</label>
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
                {/* Category */}
                <div className="flex flex-col gap-3">
                    <label className='text-second'>Category</label>
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
                {/* Rating */}
                <div className="flex flex-col gap-3">
                    <label className='text-second'>Rating</label>
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
            </div>
        </div>
    )
}
