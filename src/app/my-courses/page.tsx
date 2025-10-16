import React from 'react'
import { Metadata } from "next";
import TabsContentDesign from '@/components/MyCourses/Tabs';

export const metadata: Metadata = {
  title: "My Courses",
};

export default function MyCourses() {
  return (
    <div>
      <TabsContentDesign/>
    </div>
  )
}
