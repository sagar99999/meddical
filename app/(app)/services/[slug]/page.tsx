import TitleSection from "@/components/app/title-section"
import DoctorsCarousel from "@/components/app/doctors-carousel"
import BreadcrumbSection from "@/components/app/breadcrumb-section"
import ContactCtaSection from "@/components/app/contact-cta-section"
import FeatureBulletList from "@/components/app/feature-bullet-list"
import { BandAidIcon } from "@/components/icons/app"
import Image from "next/image"
import { HeartPlus, Syringe } from "lucide-react"
import dbConnect from "@/lib/mongoose"
import Services from "@/models/services"
import Doctors from '@/models/doctors'

type ServicePageProps = {
    params: Promise<{
        slug: string;
    }>
}

export default async function ServicePage({ params }: ServicePageProps) {

    const { slug } = await params;
    await dbConnect()
    const service = await Services.findOne({ slug }).lean()
    const docs = await Doctors.find().lean()

    if (!docs || !service) {
        return <h1>Not found</h1>
    }

    const filteredDocs = docs.map(doc => ({
        _id: doc._id.toString(),
        name: doc.name,
        department: doc.department,
        slug: doc.slug,
        image: doc.image,
        socialLinks: doc.socialLinks
    }))

    return (
        <div>
            <BreadcrumbSection breadcrumb="Home / Services" title="Service Details" imageAlt="service details page" />
            <div className="p-5 pt-15">
                <div className="max-w-340 mx-auto">
                    <div className="flex gap-6 items-start">
                        <div className="border h-auto rounded-sm overflow-hidden shrink-0 basis-60">
                            <div className="flex px-8 py-6 group transition-colors duration-300 hover:bg-brand-1 items-center gap-2 text-center">
                                <BandAidIcon styleClass="text-brand shrink-0 group-hover:text-brand-2 transition-colors duration-300 size-9" />
                                <p className="group-hover:text-brand-2 shrink-0 transition-colors duration-300">Free Checkup</p>
                            </div>
                            <div className="flex px-8 py-6 group transition-colors duration-300 hover:bg-brand-1 items-center gap-2 text-center">
                                <HeartPlus className="text-brand shrink-0 group-hover:text-brand-2 transition-colors duration-300 size-9" />
                                <p className="group-hover:text-brand-2 shrink-0 transition-colors duration-300">Cardiogram</p>
                            </div>
                            <div className="flex px-8 py-6 group transition-colors duration-300 hover:bg-brand-1 items-center gap-2 text-center">
                                <Syringe className="text-brand shrink-0 group-hover:text-brand-2 transition-colors duration-300 size-9" />
                                <p className="group-hover:text-brand-2 shrink-0 transition-colors duration-300">DNA Test</p>
                            </div>
                            <div className="flex px-8 py-6 group transition-colors duration-300 hover:bg-brand-1 items-center gap-2 text-center">
                                <BandAidIcon styleClass="text-brand shrink-0 group-hover:text-brand-2 transition-colors duration-300 size-9" />
                                <p className="group-hover:text-brand-2 shrink-0 transition-colors duration-300">Blood Bank</p>
                            </div>
                            <div className="flex px-8 py-6 group transition-colors duration-300 hover:bg-brand-1 items-center gap-2 text-center">
                                <Syringe className="text-brand shrink-0 group-hover:text-brand-2 transition-colors duration-300 size-9" />
                                <p className="group-hover:text-brand-2 shrink-0 transition-colors duration-300">Dermalogy</p>
                            </div>
                            <div className="flex px-8 py-6 group transition-colors duration-300 hover:bg-brand-1 items-center gap-2 text-center">
                                <Syringe className="text-brand shrink-0 group-hover:text-brand-2 transition-colors duration-300 size-9" />
                                <p className="group-hover:text-brand-2 shrink-0 transition-colors duration-300">Orthopedic</p>
                            </div>
                        </div>
                        <div className="grow">
                            <div className="h-120 mb-6 relative">
                                <Image className="absolute object-cover" src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 70vw" />
                            </div>
                            <div>
                                <h2 className="text-4xl text-brand-1 font-extrabold tracking-wide capitalize leading-13 mb-8">{service.title}</h2>
                                <FeatureBulletList
                                    className="mb-6 gap-3"
                                    items={service.highlights}
                                />
                                <p className="tracking-wide mb-6 text-lg">
                                    {
                                        service.description
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 pt-15">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Meet The" subtitle="Team Members" />
                    <DoctorsCarousel docs={filteredDocs} />
                </div>
            </div>
            <ContactCtaSection sectionClassName="p-5 py-10 pb-15" />
        </div>
    )
}
