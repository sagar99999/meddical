import Image from "next/image"
import { MoveRight, MoveLeft } from "lucide-react"
import Link from "next/link"

type RecentPostBlogProps = {
    image: string;
    description: string;
    title: string
}

export default function RecentPostBlog({ image, description, title }: RecentPostBlogProps) {
    return (
        <div className="grow">
            <div className="mb-10">
                <div className="relative w-full h-130 mb-6">
                    <Image className="absolute shadow-xl object-cover object-center" src={image} alt={title} fill sizes="(max-width: 1024px) 100vw, 900px" />
                </div>
                <p className="tracking-wide text-lg group-hover:underline leading-7 mb-6">
                    {description}
                </p>
            </div>
            <div className="flex justify-between items-center">
                <Link href="/news/one" className="bg-brand-2 mr-3 text text-brand-1 p-3 px-5 rounded-4xl tracking-wide inline-flex gap-2 hover:underline items-center">
                    <MoveLeft className="size-5 text-brand-1" />
                    Previous Article</Link>

                <Link href="/news/one" className="bg-brand-2 text text-brand-1 p-3 px-5 rounded-4xl tracking-wide inline-flex gap-2 hover:underline items-center">
                    Next Article
                    <MoveRight className="size-5 text-brand-1" />
                </Link>
            </div>
        </div>
    )
}
