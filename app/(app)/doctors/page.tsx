import BreadcrumbSection from "@/components/app/breadcrumb-section"
import DoctorCard from "@/components/app/doctor-card"
import NewsCarousel from "@/components/app/news-carousel"
import TestimonialCarousel from "@/components/app/testimonial-crousel"
import TitleSection from "@/components/app/title-section"
import ContactCtaSection from "@/components/app/contact-cta-section"
import Doctors from "@/models/doctors"
import dbConnect from "@/lib/mongoose"

export default async function DoctorsPage() {
    await dbConnect()
    const docs = await Doctors.find().lean()

    if (!docs) {
        return <h1>Not Found</h1>
    }

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
                    <NewsCarousel />
                </div>
            </div>
            <ContactCtaSection sectionClassName="p-5 pb-15" />
        </>
    )
}
