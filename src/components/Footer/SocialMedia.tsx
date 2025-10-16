import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SocialMedia({ href, src, alt }: { href: string, src: StaticImageData, alt: string }) {
    return (
        <Link href={href}>
            <Image src={src} width={30} alt={alt} />
        </Link>
    )
}
