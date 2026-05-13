import ServiceCard from "@/components/app/service-card"
import BreadcrumbSection from "@/components/app/breadcrumb-section"
import ContactCtaSection from "@/components/app/contact-cta-section"
import dbConnect from "@/lib/mongoose"
import Services from "@/models/services"
import { Image as ImageIcon } from "lucide-react"

export default async function ServicesPage() {

    await dbConnect()
    const services = await Services.find()

    return (
        <>
            <BreadcrumbSection breadcrumb="Home / Services" title="Our Services" imageAlt="services page" />
            <div className="p-5 pt-15">
                <div className="max-w-340 mx-auto">
                    {
                        services.length ? <div className="grid grid-cols-3 gap-6">
                            {
                                services.map(service => (
                                    <ServiceCard image={service.image} description={service.description} slug={service.slug} title={service.title} key={service._id.toString()} />
                                ))
                            }
                        </div> : <div className="flex p-5 pt-5 py-10 flex-col items-center">
                            <ImageIcon className="size-20 mb-3 text-brand-1" />
                            <p className="text-2xl tracking-tighter mb-1 text-brand-1">No Services Found</p>
                            <p className="tracking-tighter text-brand-1 ">Reload, check your connection</p>
                        </div>
                    }
                </div>
            </div>
            <ContactCtaSection sectionClassName="p-5 py-10 pb-15" />
        </>
    )
}
