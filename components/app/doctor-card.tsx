import Link from "next/link"
import Image from "next/image"
import { FacebookIcon, LinkedInIcon, InstagramIcon } from "@/components/icons/social"

export default function DoctorCard() {
    return (
        <div className="text-center rounded-sm overflow-hidden">
            <div className="relative mx-auto aspect-square">
                <Image src="/images/doctor-4.jpg" alt="doctor image" fill className="absolute object-cover object-top" />
            </div>
            <div className="pt-5 bg-brand-2">
                <p className="text-lg tracking-widest text-brand-1 mb-2">Dr. Phillips</p>
                <p className="text-lg text-brand-1 font-bold tracking-widest mb-4">NEUROLOGY</p>
                <div className="flex gap-6 justify-center mb-6 text-brand-1">
                    <FacebookIcon size="size-5.5" />
                    <LinkedInIcon size="size-5.5" />
                    <InstagramIcon size="size-5.5" />
                </div>
                <Link className="bg-brand-1 p-2 border-none outline-0 py-4.5 cursor-pointer text-brand-2 block w-full placeholder:text-white tracking-wider" href="/">View Profile</Link>
            </div>
        </div>
    )
}
