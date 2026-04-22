import BreadcrumbSection from "@/components/app/breadcrumb-section";
import TitleSection from "@/components/app/title-section";
import InfoSection from "@/components/app/info-section";
import { Search } from "lucide-react";
import Image from "next/image";
import { MoveRight, Calendar, Eye, Heart, User, MoveLeft } from "lucide-react"
import Link from "next/link";

export default function NewsPage() {
    return (
        <>
            {/* BreadCrumb Section */}
            <BreadcrumbSection />

            <div className="p-5 pt-15">
                <div className="max-w-340 flex gap-6 mx-auto">
                    <div className="grow">
                        <div className="mb-10">
                            <div className="relative w-full h-130 mb-6">
                                <Image className="absolute shadow-2xl object-cover object-center" src="/images/image-1.jpg" alt="doctor image" fill />
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
                            <button className="bg-brand-2 text text-brand-1 p-3 px-5 rounded-4xl tracking-wide flex gap-2 items-center">Read More
                                <MoveRight className="size-5" />
                            </button>
                        </div>
                        <div className="mb-10">
                            <div className="relative w-full h-130 mb-6">
                                <Image className="absolute shadow-2xl object-cover object-center" src="/images/image-2.jpg" alt="doctor image" fill />
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
                            <button className="bg-brand-2 text text-brand-1 p-3 px-5 rounded-4xl tracking-wide flex gap-2 items-center">Read More
                                <MoveRight className="size-5" />
                            </button>
                        </div>
                        <div className="mb-10">
                            <div className="relative w-full h-130 mb-6">
                                <Image className="absolute shadow-2xl object-cover object-center" src="/images/image-3.jpg" alt="doctor image" fill />
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
                            <button className="bg-brand-2 text text-brand-1 p-3 px-5 rounded-4xl tracking-wide flex gap-2 items-center">Read More
                                <MoveRight className="size-5" />
                            </button>
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

                    {/* Right Bar */}
                    <div className="basis-100 shrink-0">
                        <div className="relative mb-6">
                            <input className="bg-brand-1 placeholder:text-white font-light p-4 pr-10 tracking-wider rounded-sm text-white w-full" type="search" placeholder="Search" />
                            <Search className="size-6 text-white top-3.5 right-3 absolute" />
                        </div>
                        <div className="p-5 border rounded-sm mb-6">
                            <h2 className="text-brand-1 text-4xl font-semibold mb-10 tracking-wide">Recent Posts</h2>
                            <ul className="grid gap-6 grid-cols-1">
                                <li>
                                    <div className="flex gap-3 group cursor-pointer">
                                        <div className="relative basis-20 shrink-0">
                                            <Image src="/images/image-1.jpg" alt="doctor image" fill className="object-cover object-center rounded-sm" />
                                        </div>
                                        <div>
                                            <p className="text-brand mb-2 text-sm tracking-wide line-clamp group-hover:underline">Monday 05, Semptember 2021</p>
                                            <p className="tracking-wide line-clamp-2 group-hover:underline">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo accusamusx.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-3 group cursor-pointer">
                                        <div className="relative basis-20 shrink-0">
                                            <Image src="/images/image-1.jpg" alt="doctor image" fill className="object-cover object-center rounded-sm" />
                                        </div>
                                        <div>
                                            <p className="text-brand mb-2 text-sm tracking-wide line-clamp group-hover:underline">Monday 05, Semptember 2021</p>
                                            <p className="tracking-wide line-clamp-2 group-hover:underline">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo accusamusx.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-3 group cursor-pointer">
                                        <div className="relative basis-20 shrink-0">
                                            <Image src="/images/image-1.jpg" alt="doctor image" fill className="object-cover object-center rounded-sm" />
                                        </div>
                                        <div>
                                            <p className="text-brand mb-2 text-sm tracking-wide line-clamp group-hover:underline">Monday 05, Semptember 2021</p>
                                            <p className="tracking-wide line-clamp-2 group-hover:underline">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo accusamusx.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-3 group cursor-pointer">
                                        <div className="relative basis-20 shrink-0">
                                            <Image src="/images/image-1.jpg" alt="doctor image" fill className="object-cover object-center rounded-sm" />
                                        </div>
                                        <div>
                                            <p className="text-brand mb-2 text-sm tracking-wide line-clamp group-hover:underline">Monday 05, Semptember 2021</p>
                                            <p className="tracking-wide line-clamp-2 group-hover:underline">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo accusamusx.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="p-5 border rounded-sm">
                            <h2 className="text-brand-1 text-4xl font-semibold mb-10 tracking-wide">Categories</h2>
                            <ul className="grid gap-6 grid-cols-1">
                                <li className="text-lg hover:underline cursor-pointer pl-6 tracking-wide relative">
                                    Surgery
                                    <span className="absolute right-7 text-sm bg-brand text-white p-1 px-2.5 font-semibold rounded-full">3</span>
                                </li>
                                <li className="text-lg hover:underline cursor-pointer pl-6 tracking-wide relative">
                                    Health Care
                                    <span className="absolute right-7 text-sm bg-brand text-white p-1 px-2.5 font-semibold rounded-full">5</span>
                                </li>
                                <li className="text-lg hover:underline cursor-pointer pl-6 tracking-wide relative">
                                    Medical
                                    <span className="absolute right-7 text-sm bg-brand text-white p-1 px-2.5 font-semibold rounded-full">8</span>
                                </li>
                                <li className="text-lg hover:underline cursor-pointer pl-6 tracking-wide relative">
                                    Professional
                                    <span className="absolute right-7 text-sm bg-brand text-white p-1 px-2.5 font-semibold rounded-full">10</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="p-5 pb-15 pt-10 mt-2">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Get in touch" subtitle="Contact" />
                    <InfoSection containerClass="grid grid-cols-4 gap-6" />
                </div>
            </div>
        </>
    )
}
