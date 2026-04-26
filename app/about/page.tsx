import BreadcrumbSection from '@/components/app/breadcrumb-section'
import TestimonialCarousel from '@/components/app/testimonial-crousel'
import TitleSection from '@/components/app/title-section'
import NewsCarousel from '@/components/app/news-carousel'
import InfoSection from '@/components/app/info-section'
import Image from 'next/image'
import DoctorsCarousel from '@/components/app/doctors-carousel'

export default function AboutPage() {
    return (
        <>
            <BreadcrumbSection />
            <div className='p-5 py-15'>
                <div className="max-w-340 mx-auto">
                    <div className="flex gap-8">
                        <div className='relative shrink-0 basis-130'>
                            <Image src="/images/img-6.jpg" alt="doctor image" fill className='absolute object-cover' />
                        </div>
                        <div>
                            <p className="uppercase text-brand text-lg font-bold tracking-widest mb-2">Welcome to Meddical</p>
                            <h1 className='text-5xl text-brand-1 font-extrabold tracking-wide leading-13 max-w-130 mb-8'>Best Care for Your Good Health</h1>
                            <ul className='grid tracking-wider text-lg mb-8 grid-cols-2 gap-4 list-none'>
                                <li className={`relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5`}>All Passion for Healing</li>
                                <li className={`relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5`}>5-Star Care</li>
                                <li className={`relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5`}>All our best</li>
                                <li className={`relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5`}>Believe in Us</li>
                                <li className={`relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5`}>Always Caring</li>
                                <li className={`relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5`}>A Legacy of Excellence</li>
                            </ul>
                            <p className='tracking-wider mb-8 text-lg'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quasi similique laudantium. Eius incidunt temporibus aliquid voluptatem, cum animi. Soluta perferendis maiores facilis, quibusdam, sint amet consectetur enim blanditiis tempore labore aperiam laboriosam error saepe ipsum ducimus assumenda excepturi iure!
                            </p>
                            <p className='tracking-wider mb-8 text-lg'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quasi similique laudantium. Eius incidunt temporibus aliquid voluptatem, cum animi. Soluta perferendis maiores facilis, quibusdam, sint amet consectetur enim blanditiis tempore labore aperiam laboriosam error saepe ipsum ducimus assumenda excepturi iure!
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <TestimonialCarousel />
            <div className="p-5 pt-15">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Trusted Care" subtitle="Our Doctors" />
                    <DoctorsCarousel />
                </div>
            </div>
            <div className="p-5 mt-2">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Better information, better health" subtitle="News" />
                    <NewsCarousel />
                </div>
            </div>

            <div className="p-5 pb-15 mt-2">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Get in touch" subtitle="Contact" />
                    <InfoSection containerClass="grid grid-cols-4 gap-6" />
                </div>
            </div>
        </>
    )
}
