import { User, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type DashboardTileProps = {
    title: string,
    author: string,
    category: string,
    image: string,
    slug: string
}

export default function NewsTile({ slug, image, title, author, category }: DashboardTileProps) {
    return (
        <Link href={`/dashboard/news/update/${slug}`}>
            <div className="bg-[#f9f9f9] rounded-lg overflow-hidden text-sm tracking-tight">
                <div className="flex gap-2">
                    <div className="relative shrink-0 h-25 w-25 rounded-sm overflow-hidden">
                        <Image className="absolute object-cover" src={image} alt="doctor image" fill sizes="15rem" />
                    </div>
                    <div className="p-2">
                        <p className="line-clamp-1  text-brand-1 font-medium mb-1">
                            {title}
                        </p>
                        <div className="flex mb-2 gap-2">
                            <User className="size-4" />
                            <p className="capitalize text-brand-1">{author}</p>
                        </div>
                        <div className="flex gap-2">
                            <Tag className="size-4 text-yellow-600" />
                            <p className="capitalize">{category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
