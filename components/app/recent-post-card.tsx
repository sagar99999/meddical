import Image from "next/image"
import { Calendar, User, Eye, Heart, MoveRight, MoveLeft } from "lucide-react"
import Link from "next/link"

export default function RecentPostCard() {
    return (
        <div className="grow">
            <div className="mb-10">
                <div className="relative w-full h-130 mb-6">
                    <Image className="absolute shadow-xl object-cover object-center" src="/images/img-6.jpg" alt="doctor image" fill sizes="(max-width: 1024px) 100vw, 900px" />
                </div>
                <div className="flex mb-3 gap-6 items-center">
                    <div className="flex items-center gap-1">
                        <Calendar className="size-5" />
                        <p className="tracking-wide">Monday 05, September 2021</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="size-5 text-brand" />
                        <p className="tracking-wide">By John Doe</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye className="size-5 text-brand-1" />
                        <p className="tracking-wide">68</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Heart className="size-5 text-red-600" />
                        <p className="tracking-wide">80</p>
                    </div>
                </div>
                <h2 className="text-brand-1 text-4xl font-semibold mb-6 tracking-wide">
                    A passion for putting patients first
                </h2>
                <p className="tracking-wide group-hover:underline leading-6 mb-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae nostrum dolorem similique, libero veniam tenetur distinctio dolor temporibus velit accusamus consequuntur dignissimos culpa laboriosam cumque, animi placeat dolorum et minus omnis excepturi molestiae repellat? In, cumque ipsam quos odit corrupti fuga sint architecto libero iure molestiae sapiente ut omnis maiores soluta debitis. Voluptate, suscipit blanditiis? Facilis tempora mollitia esse?
                </p>
                <Link href="/news/one" className="bg-brand-2 text text-brand-1 p-3 px-5 rounded-4xl tracking-wide inline-flex gap-2 hover:underline items-center">Read More
                    <MoveRight className="size-5" />
                </Link>
            </div>
            <div className="mb-10">
                <div className="relative w-full h-130 mb-6">
                    <Image className="absolute shadow-xl object-cover object-center" src="/images/img-5.jpg" alt="doctor image" fill sizes="(max-width: 1024px) 100vw, 900px" />
                </div>
                <div className="flex mb-3 gap-6 items-center">
                    <div className="flex items-center gap-1">
                        <Calendar className="size-5" />
                        <p className="tracking-wide">Monday 05, September 2021</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="size-5 text-brand" />
                        <p className="tracking-wide">By John Doe</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye className="size-5 text-brand-1" />
                        <p className="tracking-wide">68</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Heart className="size-5 text-red-600" />
                        <p className="tracking-wide">80</p>
                    </div>
                </div>
                <h2 className="text-brand-1 text-4xl font-semibold mb-6 tracking-wide">
                    A passion for putting patients first
                </h2>
                <p className="tracking-wide group-hover:underline leading-6 mb-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae nostrum dolorem similique, libero veniam tenetur distinctio dolor temporibus velit accusamus consequuntur dignissimos culpa laboriosam cumque, animi placeat dolorum et minus omnis excepturi molestiae repellat? In, cumque ipsam quos odit corrupti fuga sint architecto libero iure molestiae sapiente ut omnis maiores soluta debitis. Voluptate, suscipit blanditiis? Facilis tempora mollitia esse?
                </p>
                <Link href="/news/one" className="bg-brand-2 text text-brand-1 p-3 px-5 rounded-4xl tracking-wide inline-flex gap-2 hover:underline items-center">Read More
                    <MoveRight className="size-5" />
                </Link>
            </div>
            <div className="mb-10">
                <div className="relative w-full h-130 mb-6">
                    <Image className="absolute shadow-xl object-cover object-center" src="/images/hero-2.jpg" alt="doctor image" fill sizes="(max-width: 1024px) 100vw, 900px" />
                </div>
                <div className="flex mb-3 gap-6 items-center">
                    <div className="flex items-center gap-1">
                        <Calendar className="size-5" />
                        <p className="tracking-wide">Monday 05, September 2021</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="size-5 text-brand" />
                        <p className="tracking-wide">By John Doe</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye className="size-5 text-brand-1" />
                        <p className="tracking-wide">68</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Heart className="size-5 text-red-600" />
                        <p className="tracking-wide">80</p>
                    </div>
                </div>
                <h2 className="text-brand-1 text-4xl font-semibold mb-6 tracking-wide">
                    A passion for putting patients first
                </h2>
                <p className="tracking-wide group-hover:underline leading-6 mb-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae nostrum dolorem similique, libero veniam tenetur distinctio dolor temporibus velit accusamus consequuntur dignissimos culpa laboriosam cumque, animi placeat dolorum et minus omnis excepturi molestiae repellat? In, cumque ipsam quos odit corrupti fuga sint architecto libero iure molestiae sapiente ut omnis maiores soluta debitis. Voluptate, suscipit blanditiis? Facilis tempora mollitia esse?
                </p>
                <Link href="/news/one" className="bg-brand-2 text text-brand-1 p-3 px-5 rounded-4xl tracking-wide inline-flex gap-2 hover:underline items-center">Read More
                    <MoveRight className="size-5" />
                </Link>
            </div>
            <div className="flex items-center">
                <Link className="flex hover:underline text-brand items-center tracking-wide gap-2" href="/">
                    <MoveLeft className="size-5 text-brand-1" />
                    Previous Page</Link>
                <div className="grow">
                    <ul className="flex justify-center items-center gap-3">
                        <li>
                            <Link className="text-brand-1" href="/">1</Link>
                        </li>
                        <span>-</span>
                        <li>
                            <Link className="text-brand" href="/">2</Link>
                        </li>
                        <span>-</span>
                        <li>
                            <Link className="text-brand" href="/">3</Link>
                        </li>
                        <span>-</span>
                        <li>
                            <Link className="text-brand" href="/">4</Link>
                        </li>
                        <span>-</span>
                        <li>
                            <Link className="text-brand" href="/">5</Link>
                        </li>
                    </ul>
                </div>
                <Link className="flex hover:underline text-brand items-center tracking-wide gap-2" href="/">
                    Next Page
                    <MoveRight className="size-5 text-brand-1" />
                </Link>
            </div>
        </div>
    )
}
