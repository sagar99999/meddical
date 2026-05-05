import ServiceCard from "@/components/app/service-card"
import BreadcrumbSection from "@/components/app/breadcrumb-section"
import ContactCtaSection from "@/components/app/contact-cta-section"
import dbConnect from "@/lib/mongoose"
import Services from "@/models/services"

export default async function ServicesPage() {

    await dbConnect()
    const services = await Services.find()

    if (!services) {
        return <h1>Not Found</h1>
    }

    return (
        <>
            <BreadcrumbSection breadcrumb="Home / Services" title="Our Services" imageAlt="services page" />
            <div className="p-5 pt-15">
                <div className="max-w-340 mx-auto">
                    <div className="grid grid-cols-3 gap-6">

                        {
                            services.length && services.map(service => (
                                <ServiceCard image={service.image} description={service.description} slug={service.slug} title={service.title} key={service._id.toString()} />
                            ))
                        }

                    </div>
                </div>
            </div>
            <ContactCtaSection sectionClassName="p-5 py-10 pb-15" />
        </>
    )
}
