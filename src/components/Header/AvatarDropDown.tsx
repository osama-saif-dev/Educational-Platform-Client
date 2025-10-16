'use client';
import { IUser } from "@/types/User";
import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";
import Link from "next/link";
import { FaUserCheck } from "react-icons/fa";
import { motion } from "motion/react";
import { LogoutServer } from "@/services/Logout";
import { useDispatch } from "react-redux";
import { logout } from "@/lib/store/reducers/user";
import { useRouter } from "next/navigation";

export function AvatarDropDown({ user }: { user: IUser }) {

    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogOut = () => {
        LogoutServer();
        dispatch(logout());
        router.replace('/login');
    }

    return (
        <Dropdown
            className="cursor-pointer w-[250px]"
            label={
                <motion.div whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                    <Avatar alt="User settings" className="cursor-pointer" img={user?.image_url} rounded />
                </motion.div>
            }
            arrowIcon={false}
            inline
        >
            <DropdownHeader className="flex items-center gap-4">
                <FaUserCheck className="text-[25px] text-second" />
                <div>
                    <span className="block text-sm">{user?.first_name + ' ' + user?.last_name}</span>
                    <span className="block text-sm">{user?.email}</span>
                </div>
            </DropdownHeader>
            <DropdownDivider className="mb-2" />
            {user?.role !== 'user' && (
                <Link href={user.role == 'admin' ? '/dashboard/admin' : '/dashboard/teacher'}>
                    <DropdownItem>
                        Dashboard
                    </DropdownItem>
                </Link>
            )}
            <Link href={'/profile'}>
                <DropdownItem>
                    Profile
                </DropdownItem>
            </Link>
            <Link href={'/my-courses'}>
                <DropdownItem>
                    My Courses
                </DropdownItem>
            </Link>
            {/* <DropdownDivider /> */}
            <DropdownItem onClick={handleLogOut}>Sign out</DropdownItem>
        </Dropdown>
    );
}
