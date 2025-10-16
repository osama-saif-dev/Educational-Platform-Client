'use client';
import { usePathname } from "next/navigation";
import Content from "./Content";
import Explore from "./Explore";
import QuickLinks from "./QuickLinks";

export default function Footer() {
    const pathName = usePathname();
    return (
        <>
            {!pathName.startsWith('/dashboard') && (
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 bg-main text-white px-8 py-4 mt-[50px]'>
                    <div className="lg:col-span-4">
                        <Content />
                    </div>
                    <div className="lg:col-span-4">
                        <Explore />
                    </div>
                    <div className="lg:col-span-4">
                        <QuickLinks />
                    </div>
                </div>
            )}
        </>

    )
}
