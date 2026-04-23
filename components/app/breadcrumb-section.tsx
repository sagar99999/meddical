import Image from "next/image"

export default function BreadcrumbSection() {
    return (
        <>
            <div className='h-90 relative p-5'>
                <Image src="/images/image-1.jpg" alt="contact page" fill className="object-cover object-center -z-10 absolute" />
                <div className="max-w-340 h-full flex flex-wrap items-center mx-auto text-brand-1">
                    <div>
                        <span className='text-xl block tracking-wide mb-1'>Home / Contact</span>
                        <h1 className='text-5xl font-extrabold tracking-wide'>Our Contacts</h1>
                    </div>
                </div>
            </div>
            <div className="h-1.5 flex">
                <div className="bg-brand-2 h-full basis-[25%]" />
                <div className="bg-brand-1 h-full basis-[50%]" />
                <div className="bg-brand h-full basis-[25%]" />
            </div>
        </>
    )
}
