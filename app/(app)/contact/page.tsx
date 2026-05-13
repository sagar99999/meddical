import BreadcrumbSection from "@/components/app/breadcrumb-section"
import LocationMap from "@/components/app/location-map"
import { Image as ImageIcon } from "lucide-react"
import ContactForm from "@/components/app/contact-form"
import NewsCarousel from "@/components/app/news-carousel"
import TitleSection from "@/components/app/title-section"
import InfoSection from "@/components/app/info-section"
import dbConnect from "@/lib/mongoose"
import News from '@/models/news'

export default async function ContactPage() {

    await dbConnect()

    const news = await News.find().lean()

    const filteredNews = news.map(singleNews => ({
        _id: singleNews._id.toString(),
        image: singleNews.image,
        title: singleNews.title,
        likes: singleNews.likes,
        views: singleNews.views,
        createAt: singleNews.createdAt,
        slug: singleNews.slug
    }));
    return (
        <>
            <BreadcrumbSection breadcrumb="Home / Contact" title="Our Contacts" imageAlt="contact page" />
            <LocationMap />
            <div className="p-5 pt-10">
                <div className="flex max-w-340 mx-auto gap-6">
                    <ContactForm />
                    <div className="grid grow">
                        <InfoSection containerClass="grid gap-6 grid-cols-2" />
                    </div>
                </div>
            </div>
            <div className="p-5 pt-10 pb-12">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Better information, better health" subtitle="News" />
                    {
                        filteredNews.length ? <NewsCarousel news={filteredNews} /> : <div className="flex p-5 pt-5 py-10 flex-col items-center">
                            <ImageIcon className="size-20 mb-3 text-brand-1" />
                            <p className="text-2xl tracking-tighter mb-1 text-brand-1">No Articles Found</p>
                            <p className="tracking-tighter text-brand-1 ">Reload, check your connection</p>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}