import BreadcrumbSection from "@/components/app/breadcrumb-section"
import DoctorCard from "@/components/app/doctor-card"
import NewsCarousel from "@/components/app/news-carousel"
import TestimonialCarousel from "@/components/app/testimonial-crousel"
import TitleSection from "@/components/app/title-section"
import ContactCtaSection from "@/components/app/contact-cta-section"
import Doctors from "@/models/doctors"
import dbConnect from "@/lib/mongoose"
import News from '@/models/news'
import { Image as ImageIcon } from "lucide-react"

export default async function DoctorsPage() {
    await dbConnect()
    const docs = await Doctors.find().lean()
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
            <BreadcrumbSection breadcrumb="Home / Doctors" title="Our Doctors" imageAlt="doctors page" />
            <div className="max-w-340 mx-auto">
                {
                    docs.length ? <div className="p-5 grid gap-6 grid-cols-3 py-15">
                        {
                            docs.map(doc => (
                                <DoctorCard image={doc.image} name={doc.name} department={doc.department} slug={doc.slug} socialLinks={doc.socialLinks} key={doc._id.toString()} />
                            ))
                        }
                    </div> :
                        <div className="flex p-5 py-20 flex-col items-center">
                            <ImageIcon className="size-20 mb-3 text-brand-1" />
                            <p className="text-2xl tracking-tighter mb-1 text-brand-1">No Doctors Found</p>
                            <p className="tracking-tighter text-brand-1 ">Reload, check your connection</p>
                        </div>
                }
            </div>
            <TestimonialCarousel />
            <div className="p-5 pt-15">
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
            <ContactCtaSection sectionClassName="p-5 pb-15" />
        </>
    )
}
