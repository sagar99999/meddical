import Image from "next/image"
import { Calendar, User, Eye, MoveRight, MoveLeft } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import LikeBtn from "./like-btn"
import { getTotalNewsPages, getRecentNews } from "@/actions/news"

type RecentPostCardProps = {
    page: number;
    category: string;
    q: string;
}

export default async function RecentPostCard({ page, category, q }: RecentPostCardProps) {

    const getPageLink = (newPage: number | null) => {
        const params = new URLSearchParams()

        // query params: search check
        if (q) {
            params.set("q", q)
        }

        // query params: category check
        if (category) {
            params.set('category', category);
        }

        // query params: page check
        if (newPage) {
            params.set('page', String(newPage));
        }

        return `/news?${params.toString()}`;
    }

    const pages = await getTotalNewsPages(category, q)
    const currentPage = Number(page || 1)
    const recentNews = await getRecentNews(Number(currentPage || 1), category, q)

    if (!recentNews.data || !pages.success || pages.data == null) {
        return <h1>Not Found</h1>
    }

    const totalPages = pages.data

    return (
        <div className="grow">
            {
                recentNews.data.map(singleNews => (
                    <div key={singleNews._id.toString()} className="mb-10">
                        <div className="relative w-full h-130 mb-6">
                            <Image className="absolute shadow-xl object-cover object-center" src={singleNews.image} alt={singleNews.title} fill sizes="(max-width: 1024px) 100vw, 900px" />
                        </div>
                        <div className="flex mb-3 gap-6 items-center">
                            <div className="flex items-center gap-1">
                                <Calendar className="size-5" />
                                <p className="tracking-wide">{format(new Date(singleNews.createdAt), "PPP")}</p>
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
                    currentPage > 1 && <Link className="flex hover:underline text-brand items-center tracking-wide gap-2" href={getPageLink(currentPage - 1)}>
                        <MoveLeft className="size-5" />
                        Previous Page
                    </Link>
                }
                <div className="grow">
                    <ul className="flex justify-center items-center">
                        {
                            Array.from({ length: totalPages }, (_, ind) => <li key={ind} className="flex">
                                <Link className="text-brand-1" href={getPageLink(ind + 1)}>{ind + 1}</Link>
                                {ind + 1 < totalPages && <span className="mx-2">-</span>}
                            </li>
                            )
                        }
                    </ul>
                </div>
                {
                    currentPage < totalPages && <Link className="flex hover:underline text-brand items-center tracking-wide gap-2" href={getPageLink(currentPage + 1)}>
                        Next Page
                        <MoveRight className="size-5 text-brand-1" />
                    </Link>
                }
            </div>
        </div>
    )
}
