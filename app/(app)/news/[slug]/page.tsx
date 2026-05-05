import BreadcrumbSection from "@/components/app/breadcrumb-section";
import RecentPostFilter from "@/components/app/recent-post-filter";
import RecentPostBlog from "@/components/app/recent-post-blog";
import ContactCtaSection from "@/components/app/contact-cta-section";
import dbConnect from "@/lib/mongoose";
import News from "@/models/news";

type SingleNewsPageProps = {
    params: Promise<{
        slug: string
    }>
}

export default async function SingleNewsPage({ params }: SingleNewsPageProps) {
    const { slug } = await params;
    await dbConnect()
    const singleNews = await News.findOne({ slug }).lean()

    if (!singleNews) {
        return <h1>Not found</h1>
    }

    return (
        <>
            {/* BreadCrumb Section */}
            <BreadcrumbSection breadcrumb="Home / News" title="News Article" imageAlt="news article page" />

            <div className="p-5 pt-15">
                <div className="max-w-340 flex gap-6 mx-auto">
                    <RecentPostBlog description={singleNews.description} title={singleNews.title} image={singleNews.image} />
                    {/* Right Bar */}
                    <RecentPostFilter />
                </div>
            </div>

            {/* Contact Section */}
            <ContactCtaSection sectionClassName="p-5 pb-15 pt-10 mt-2" />
        </>
    )
}
