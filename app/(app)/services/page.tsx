import ServiceCard from "@/components/app/service-card"
import BreadcrumbSection from "@/components/app/breadcrumb-section"
import ContactCtaSection from "@/components/app/contact-cta-section"

export default function ServicesPage() {
    return (
        <>
            <BreadcrumbSection breadcrumb="Home / Services" title="Our Services" imageAlt="services page" />
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
            <ContactCtaSection sectionClassName="p-5 py-10 pb-15" />
        </>
    )
}
