import Link from "next/link"
import Image from "next/image"
import { FacebookIcon, LinkedInIcon, InstagramIcon } from "@/components/icons/social"

type DoctorCardProps = {
    image: string;
    name: string;
    slug: string;
    department: string;
    socialLinks: {
        facebook: string;
        linkedin: string;
        instagram: string;
    }
}

export default function DoctorCard({ image,name, socialLinks, slug, department }: DoctorCardProps) {
    return (
        <div className="text-center rounded-sm overflow-hidden">
            <div className="relative mx-auto aspect-square">
                <Image src={image} alt="doctor image" fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="absolute object-cover object-top" />
            </div>
            <div className="pt-5 bg-brand-2">
                <p className="text-lg tracking-widest capitalize text-brand-1 mb-2">{name}</p>
                <p className="text-lg text-brand-1 capitalize font-bold tracking-widest mb-4">{department}</p>
                <div className="flex gap-6 justify-center mb-6 text-brand-1">
                    <Link href={socialLinks.facebook}>
                        <FacebookIcon size="size-5.5" />
                    </Link>
                    <Link href={socialLinks.linkedin}>
                        <LinkedInIcon size="size-5.5" />
                    </Link>
                    <Link href={socialLinks.instagram}>
                        <InstagramIcon size="size-5.5" />
                    </Link>
                </div>
                <Link className="bg-brand-1 p-2 border-none outline-0 py-4.5 cursor-pointer text-brand-2 block w-full placeholder:text-white tracking-wider" href={`/doctors/${slug}`}>View Profile</Link>
            </div>
        </div>
    )
}
