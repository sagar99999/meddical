import { User, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type DoctorsTileProps = {
    name: string,
    image: string,
    slug: string,
    department: string,
    description: string
}

export default function DoctorsTile({ slug, image, name, department, description }: DoctorsTileProps) {
    return (
        <Link href={`/dashboard/doctors/update/${slug}`}>
            <div className="bg-[#f9f9f9] rounded-lg overflow-hidden text-sm tracking-tight">
                <div className="flex gap-2">
                    <div className="relative shrink-0 h-25 w-25 rounded-sm overflow-hidden">
                        <Image className="absolute object-cover" src={image} alt="doctor image" fill sizes="15rem" />
                    </div>
                    <div className="p-2">
                        <div className="flex mb-1 gap-2">
                            <User className="size-4" />
                            <p className="line-clamp-1 text-brand-1 font-medium mb-1">{name}</p>
                        </div>
                        <p className="mb-2 line-clamp-1 text-brand-1">{description}</p>
                        <div className="flex gap-2">
                            <Tag className="size-4 text-yellow-600" />
                            <p className="capitalize">{department}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}