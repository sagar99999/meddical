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
    await dbConnect()
    const { slug } = await params;
    const currentNews = await News.findOne({ slug }).lean()

    if (!currentNews) {
        return <h1>Not found</h1>
    }

    const prevNews = await News.findOne({
        createdAt: { $gt: currentNews?.createdAt }
    })
        .sort({ createdAt: -1 })
        .select('slug');

    const nextNews = await News.findOne({
        createdAt: { $lt: currentNews?.createdAt }
    })
        .sort({ createdAt: -1 })
        .select('slug');

    // increment the view count
    await News.updateOne(
        { slug },
        { $inc: { views: 1 } }
    )

    return (
        <>
            {/* BreadCrumb Section */}
            <BreadcrumbSection breadcrumb="Home / News" title="News Article" imageAlt="news article page" />

            <div className="p-5 pt-15">
                <div className="max-w-340 flex gap-6 mx-auto">
                    <RecentPostBlog previousSlug={prevNews?.slug || ""} nextSlug={nextNews?.slug || ""} description={currentNews.description} title={currentNews.title} image={currentNews.image} />
                    {/* Right Bar */}
                    <RecentPostFilter />
                </div>
            </div>

            {/* Contact Section */}
            <ContactCtaSection sectionClassName="p-5 pb-15 pt-10 mt-2" />
        </>
    )
}
