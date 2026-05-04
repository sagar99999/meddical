import BreadcrumbSection from "@/components/app/breadcrumb-section"
import LocationMap from "@/components/app/location-map"
import { PhoneCall, Clock4, MapPin, Mail } from "lucide-react"
import ContactForm from "@/components/app/contact-form"
import NewsCarousel from "@/components/app/news-carousel"
import TitleSection from "@/components/app/title-section"
import InfoSection from "@/components/app/info-section"

export default function ContactPage() {
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
                    <NewsCarousel />
                </div>
            </div>
        </>
    )
}
