import Image from "next/image"
import { Calendar, User, Eye, MoveRight, MoveLeft } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import dbConnect from "@/lib/mongoose"
import LikeBtn from "./like-btn"
import { getTotalNewsPages } from "@/actions/news"
import { getRecentNews } from "@/actions/news"

type RecentPostCardProps = {
    page: number
}

export default async function RecentPostCard({ page }: RecentPostCardProps) {

    await dbConnect()
    const pages = await getTotalNewsPages()
    const currentPage = Number(page || 1)
    const recentNews = await getRecentNews(Number(currentPage || 1))

    if (!recentNews.data || !pages.success) {
        return <h1>Not Found</h1>
    }

    return (
        <div className="grow">
            {
                recentNews.data.length && recentNews.data.map(singleNews => (
                    <div key={singleNews._id.toString()} className="mb-10">
                        <div className="relative w-full h-130 mb-6">
                            <Image className="absolute shadow-xl object-cover object-center" src={singleNews.image} alt={singleNews.title} fill sizes="(max-width: 1024px) 100vw, 900px" />
                        </div>
                        <div className="flex mb-3 gap-6 items-center">
                            <div className="flex items-center gap-1">
                                <Calendar className="size-5" />
                                <p className="tracking-wide">{format(singleNews.createdAt, 'eeee dd, MMMM yyyy')}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <User className="size-5 text-brand" />
                                <p className="tracking-wide">{singleNews.author}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <Eye className="size-5 text-brand-1" />
                                <p className="tracking-wide">{singleNews.views}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <LikeBtn likes={singleNews.likes} id={singleNews._id.toString()} />
                            </div>
                        </div>
                        <h2 className="text-brand-1 text-4xl font-semibold mb-6 tracking-wide">
                            {singleNews.title}
                        </h2>
                        <p className="tracking-wide group-hover:underline leading-6 mb-6">
                            {singleNews.description}
                        </p>
                        <Link href={`/news/${singleNews.slug}`} className="bg-brand-2 text text-brand-1 p-3 px-5 rounded-4xl tracking-wide inline-flex gap-2 hover:underline items-center">Read More
                            <MoveRight className="size-5" />
                        </Link>
                    </div>
                ))
            }
            <div className="flex items-center">
                {
                    currentPage > 1 && <Link className="flex hover:underline text-brand items-center tracking-wide gap-2" href={`/news?page=${Number(currentPage - 1)}`}>
                        <MoveLeft className="size-5 text-brand-1" />
                        Previous Page</Link>
                }
                <div className="grow">
                    <ul className="flex justify-center items-center">
                        {
                            Array.from({ length: pages.data! }, (_, ind) => <li key={ind} className="flex">
                                <Link className="text-brand-1" href={`/news${ind > 0 ? '?page=' + Number(ind + 1) : ""}`}>{ind + 1}</Link>
                                {ind + 1 < pages.data! && <span className="mx-2">-</span>}
                            </li>
                            )
                        }
                    </ul>
                </div>
                {
                    currentPage < pages.data! && <Link className="flex hover:underline text-brand items-center tracking-wide gap-2" href={`/news?page=${Number(currentPage + 1)}`}>
                        Next Page
                        <MoveRight className="size-5 text-brand-1" />
                    </Link>
                }
            </div>
        </div>
    )
}
