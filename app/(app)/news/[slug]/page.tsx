import BreadcrumbSection from "@/components/app/breadcrumb-section";
import RecentPostFilter from "@/components/app/recent-post-filter";
import RecentPostBlog from "@/components/app/recent-post-blog";
import ContactCtaSection from "@/components/app/contact-cta-section";
import dbConnect from "@/lib/mongoose";
import News from "@/models/news";
import { Image as ImageIcon } from "lucide-react"
import NewsViewTracker from "@/components/app/news-views-tracker"

type SingleNewsPageProps = {
    params: Promise<{
        slug: string
    }>
}

export default async function SingleNewsPage({ params }: SingleNewsPageProps) {
    await dbConnect()
    const { slug } = await params;
    const currentNews = await News.findOne({ slug }).lean()

    const prevNews = await News.findOne({
        createdAt: { $gt: currentNews?.createdAt }
    })
        .sort({ createdAt: 1 })
        .select('slug');

    const nextNews = await News.findOne({
        createdAt: { $lt: currentNews?.createdAt }
    })
        .sort({ createdAt: -1 })
        .select('slug');

    return (
        <>
            {/* BreadCrumb Section */}
            <BreadcrumbSection breadcrumb="Home / News" title="News Article" imageAlt="news article page" />

            <div className="p-5 pt-15">
                <div className="max-w-340 flex gap-6 mx-auto">
                    {
                        currentNews ? <RecentPostBlog previousSlug={prevNews?.slug || ""} nextSlug={nextNews?.slug || ""} description={currentNews.description} title={currentNews.title} image={currentNews.image} /> : <div className="flex p-5 w-full py-15 flex-col items-center">
                            <ImageIcon className="size-20 mb-3 text-brand-1" />
                            <p className="text-2xl tracking-tighter mb-1 text-brand-1">News Not Found</p>
                            <p className="tracking-tighter text-brand-1 ">Reload, or adjust your filter</p>
                        </div>
                    }
                    {/* Right Bar */}
                    <RecentPostFilter searchParams={({ page: null, category: null })} />
                </div>
            </div>

            {/* Contact Section */}
            <ContactCtaSection sectionClassName="p-5 pb-15 pt-10 mt-2" />
            <NewsViewTracker slug={slug} />
        </>
    )
}