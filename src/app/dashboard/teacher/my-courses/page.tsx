import GetMyCategories from '@/components/Dashboard/Teacher/GetMyCategories'
import SearchAndSortCourses from '@/components/Dashboard/Teacher/SearchAndSortCourses'
import React from 'react'

export default function page() {
  return (
    <div className='px-4'>
      <SearchAndSortCourses/>
      <GetMyCategories/>
    </div>
  )
}
