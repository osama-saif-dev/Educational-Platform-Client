'use client';
import Image from "next/image";
import EduCourse from '@/../public/Footer_logo.png';
import IconDashboard from '@/../public/Vector 4.png';
import IconMyCourses from '@/../public/Stack.png';
import IconEarning from '@/../public/CreditCard.png';
import IconSettings from '@/../public/setting-2.png';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from 'lucide-react';
import { LogoutServer } from "@/services/Logout";
import { logout } from "@/lib/store/reducers/user";
import { useDispatch } from "react-redux";

const teacherLinks = [
    { title: 'Dashboard', to: '/dashboard/teacher', icon: IconDashboard },
    { title: 'My Courses', to: '/dashboard/teacher/my-courses', icon: IconMyCourses },
    { title: 'Earning', to: '/dashboard/teacher/earning', icon: IconEarning },
    { title: 'Settings', to: '/dashboard/teacher/settings', icon: IconSettings },
]

export default function Aside() {
    const pathName = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogOut = () => {
        LogoutServer();
        dispatch(logout());
        router.replace('/login');
    }

    return (
        <aside className="bg-aside text-white w-[20%] xl:w-[18%] fixed top-0 min-h-screen hidden lg:inline-block">
            <Link href={'/'} className="flex items-center justify-center p-4">
                <Image src={EduCourse} alt="Edu Course Image" width={150} height={150} />
            </Link>
            <ul className="flex flex-col gap-3 mt-6">
                {teacherLinks.map((link) => (
                    <li key={link.to}
                        className={`${pathName === link.to && 'bg-main'} flex flex-col gap-4 p-3 hover:bg-main transition-all duration-700 ease-in-out`}>
                        <Link href={link.to} className="flex items-center gap-2 h-full">
                            <Image src={link.icon} alt={link.title + ' icon'} width={20} height={20} />
                            <span>{link.title}</span>
                        </Link>
                    </li>
                ))}
                <div onClick={handleLogOut} className='absolute bottom-[30px] flex gap-4 p-3 w-full hover:bg-main transition-all duration-700 ease-in-out cursor-pointer'>
                    <LogOut />
                    <button className="cursor-pointer">Logout</button>
                </div>
            </ul>
        </aside>
    )
}
