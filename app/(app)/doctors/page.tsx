import BreadcrumbSection from "@/components/app/breadcrumb-section"
import DoctorCard from "@/components/app/doctor-card"
import NewsCarousel from "@/components/app/news-carousel"
import TestimonialCarousel from "@/components/app/testimonial-crousel"
import TitleSection from "@/components/app/title-section"
import ContactCtaSection from "@/components/app/contact-cta-section"
import Doctors from "@/models/doctors"
import dbConnect from "@/lib/mongoose"
import News from '@/models/news'


export default async function DoctorsPage() {
    await dbConnect()
    const docs = await Doctors.find().lean()
    const news = await News.find().lean()

    if (!docs || !news) {
        return <h1>Not found</h1>
    }

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
                <div className="p-5 grid gap-6 grid-cols-3 py-15">
                    {
                        docs.length && docs.map(doc => (
                            <DoctorCard image={doc.image} name={doc.name} department={doc.department} slug={doc.slug} socialLinks={doc.socialLinks} key={doc._id.toString()} />
                        ))
                    }
                </div>
            </div>
            <TestimonialCarousel />
            <div className="p-5 pt-15">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Better information, better health" subtitle="News" />
                    <NewsCarousel news={filteredNews} />
                </div>
            </div>
            <ContactCtaSection sectionClassName="p-5 pb-15" />
        </>
    )
}
