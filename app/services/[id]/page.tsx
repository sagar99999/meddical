import TitleSection from "@/components/app/title-section"
import InfoSection from "@/components/app/info-section"
import DoctorsCarousel from "@/components/app/doctors-carousel"
import BreadcrumbSection from "@/components/app/breadcrumb-section"
import { BandAidIcon } from "@/components/icons/app"
import Image from "next/image"
import { HeartPlus, Syringe } from "lucide-react"

export default function ServicePage() {
    return (
        <div>
            <BreadcrumbSection />
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
                                <Image className="absolute object-cover" src="/images/image-1.jpg" alt="doctor image" fill />
                            </div>
                            <div>
                                <h2 className="text-4xl text-brand-1 font-extrabold tracking-wide leading-13 mb-8">A passion for putting patients first</h2>
                                <ul className="grid tracking-wider text-lg mb-6 grid-cols-2 gap-3 list-none">
                                    <li className="relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5">All Passion for Healing</li>
                                    <li className="relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5">5-Star Care</li>
                                    <li className="relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5">All our best</li>
                                    <li className="relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5">Believe in Us</li>
                                    <li className="relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5">Always Caring</li>
                                    <li className="relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5">A Legacy of Excellence</li>
                                </ul>
                                <p className="tracking-wide mb-6 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic, ipsum eum sapiente voluptate, voluptatem placeat mollitia natus corrupti modi commodi similique, magni recusandae omnis voluptatibus vero molestias nulla. Accusamus similique dignissimos, vero veniam eligendi mollitia. Modi, dolor omnis. Dicta dolorum eveniet vero aliquid non vel repellendus consequatur praesentium placeat.</p>
                                <p className="tracking-wide text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic, ipsum eum sapiente voluptate, voluptatem placeat mollitia natus corrupti modi commodi similique, magni recusandae omnis voluptatibus vero molestias nulla. Accusamus similique dignissimos, vero veniam eligendi mollitia. Modi, dolor omnis. Dicta dolorum eveniet vero aliquid non vel repellendus consequatur praesentium placeat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 pt-15">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Meet The" subtitle="Team Members" />
                    <DoctorsCarousel />
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
