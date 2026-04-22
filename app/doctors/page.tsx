import BreadcrumbSection from "@/components/app/breadcrumb-section"
import DoctorCard from "@/components/app/doctor-card"
import InfoSection from "@/components/app/info-section"
import NewsCarousel from "@/components/app/news-carousel"
import TestimonialCarousel from "@/components/app/testimonial-crousel"
import TitleSection from "@/components/app/title-section"

export default function DoctorsPage() {
    return (
        <>
            <BreadcrumbSection />
            <div className="max-w-340 mx-auto">
                <div className="p-5 grid gap-6 grid-cols-3 py-15">
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                </div>
            </div>
            <TestimonialCarousel />
            <div className="p-5 pt-15">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Better information, better health" subtitle="News" />
                    <NewsCarousel />
                </div>
            </div>
            <div className="p-5 pb-15">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Get in touch" subtitle="Contact" />
                    <InfoSection containerClass="grid grid-cols-4 gap-6" />
                </div>
            </div>
        </>
    )
}
