import Image from "next/image"
import SectionColorDivider from "@/components/app/section-color-divider"

type BreadcrumbSectionProps = {
    breadcrumb?: string
    title?: string
    backgroundImage?: string
    imageAlt?: string
}

export default function BreadcrumbSection({
    breadcrumb = "Home / Contact",
    title = "Our Contacts",
    backgroundImage = "/images/image-1.jpg",
    imageAlt = "contact page",
}: BreadcrumbSectionProps) {
    return (
        <>
            <div className='h-90 relative p-5'>
                <Image src={backgroundImage} alt={imageAlt} fill sizes="100vw" className="object-cover object-center -z-10 absolute" />
                <div className="max-w-340 h-full flex flex-wrap items-center mx-auto text-brand-1">
                    <div>
                        <span className='text-xl block tracking-wide mb-1'>{breadcrumb}</span>
                        <h1 className='text-5xl font-extrabold tracking-wide'>{title}</h1>
                    </div>
                </div>
            </div>
            <SectionColorDivider />
        </>
    )
}
