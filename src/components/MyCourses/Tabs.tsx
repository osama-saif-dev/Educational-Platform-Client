'use client';
import { TabItem, Tabs } from "flowbite-react";
import { MdOutlineDone, MdOutlinePending, MdShoppingCartCheckout } from 'react-icons/md';
import { motion } from "motion/react";
import { childYDiv, parentDiv } from "@/services/ParentAndChildMotions";

export default function TabsContentDesign() {
    return (
        <motion.div variants={parentDiv} initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col items-center gap-6 my-8">
            <motion.h1 variants={childYDiv} className="text-main text-[20px] sm:text-[30px] md:text-[50px] font-bold">My Courses</motion.h1>
            <motion.div variants={childYDiv} className="overflow-x-auto">
                <Tabs aria-label="Full width tabs" variant="fullWidth">
                    <TabItem active title="Completed" icon={MdOutlineDone}>

                    </TabItem>
                    <TabItem title="Un Completed" icon={MdOutlinePending}>

                    </TabItem>
                    <TabItem title="Purchased" icon={MdShoppingCartCheckout}>

                    </TabItem>

                </Tabs>
            </motion.div>
        </motion.div>
    )
}
