import Image from "next/image"
import Link from "next/link"
import { BandAidIcon } from "@/components/icons/app"
import { MoveRight } from "lucide-react"

export default function ServiceCard() {
    return (
        <div className="border group rounded-sm overflow-hidden">
            <div className="aspect-square relative text-black">
                <Image src="/images/image-1.jpg" alt="doctor image" fill className="absolute object-cover" />
                <BandAidIcon styleClass="transition-opacity duration-300 size-9 group-hover:opacity-0 box-content p-6 bg-brand-1 rounded-full text-white right-5 -bottom-10 absolute" />
                <div className="transition-opacity duration-300 absolute group-hover:opacity-100 opacity-0 bg-[#17225681] size-full top-0 left-0" />
                <BandAidIcon styleClass="transition-opacity duration-300 size-15 bg-transparent group-hover:opacity-100 opacity-0 box-content bg-brand-1 rounded-full text-white left-[50%] top-[50%] -translate-[50%] absolute" />
            </div>
            <div className="py-5 p-5">
                <p className="text-3xl font-semibold tracking-wide mb-4 line-clamp-1">Free CheckUp</p>
                <p className="tracking-wider mb-4 line-clamp-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quaerat repellendus porro impedit, omnis doloribus.
                </p>
                <div className="flex gap-2 items-center">
                    <Link className="text-brand text-lg hover:underline" href="/">Learn More</Link>
                    <MoveRight className="size-5" />
                </div>
            </div>
        </div>
    )
}
