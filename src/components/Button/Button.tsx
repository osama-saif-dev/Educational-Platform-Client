import { ButtonProperites } from "@/types/Button";
import Link from "next/link";

export default function Button({ href, bg, color, name, border }: ButtonProperites) {
  return (
    <Link 
    className={`${bg} ${color} px-4 py-2 rounded-md border border-main    
    ${ border ? 
    'hover:bg-main hover:text-white transition-all duration-500 ease-in-out'
        :
    'hover:bg-white hover:text-main transition-all duration-500 ease-in-out'
    }`} href={href}> { name } </Link>
  )
}
