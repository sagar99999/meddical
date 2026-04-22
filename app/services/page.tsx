import TitleSection from "@/components/app/title-section"
import InfoSection from "@/components/app/info-section"
import ServiceCard from "@/components/app/service-card"
import BreadcrumbSection from "@/components/app/breadcrumb-section"

export default function ServicesPage() {
    return (
        <div>
            <BreadcrumbSection />
            <div className="p-5 pt-15">
                <div className="max-w-340 mx-auto">
                    <div className="grid grid-cols-3 gap-6">
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                    </div>
                </div>
            </div>
            <div className="p-5 py-10 pb-15">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Get in touch" subtitle="Contact" />
                    <InfoSection containerClass="grid grid-cols-4 gap-6" />
                </div>
            </div>
        </div>
    )
}
