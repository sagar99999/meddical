import BreadcrumbSection from '@/components/app/breadcrumb-section'
import TestimonialCarousel from '@/components/app/testimonial-crousel'
import TitleSection from '@/components/app/title-section'
import NewsCarousel from '@/components/app/news-carousel'
import Image from 'next/image'
import DoctorsCarousel from '@/components/app/doctors-carousel'
import FeatureBulletList from '@/components/app/feature-bullet-list'
import ContactCtaSection from '@/components/app/contact-cta-section'
import dbConnect from '@/lib/mongoose'
import Doctors from '@/models/doctors'

export default async function AboutPage() {

    await dbConnect()
    const docs = await Doctors.find().lean()

    if (!docs) {
        return <h1>Not found</h1>
    }

    const filteredDocs = docs.map(doc => ({
        _id: doc._id.toString(),
        name: doc.name,
        department: doc.department,
        slug: doc.slug,
        image: doc.image,
        socialLinks: doc.socialLinks
    }));

    return (
        <>
            <BreadcrumbSection breadcrumb="Home / About Us" title="About Us" imageAlt="about page" />
            <div className='p-5 py-15'>
                <div className="max-w-340 mx-auto">
                    <div className="flex gap-8">
                        <div className='relative shrink-0 basis-130'>
                            <Image src="/images/img-6.jpg" alt="doctor image" fill sizes="(max-width: 1024px) 100vw, 38vw" className='absolute object-cover' />
                        </div>
                        <div>
                            <p className="uppercase text-brand text-lg font-bold tracking-widest mb-2">Welcome to Meddical</p>
                            <h1 className='text-5xl text-brand-1 font-extrabold tracking-wide leading-13 max-w-130 mb-8'>Best Care for Your Good Health</h1>
                            <FeatureBulletList
                                className="mb-8"
                                items={`All Passion for Healing, 5-Star Care, All our best, Believe in Us, Always Caring, A Legacy of Excellence`
                                }
                            />
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
                    <DoctorsCarousel docs={filteredDocs} />
                </div>
            </div>
            <div className="p-5 mt-2">
                <div className="max-w-340 mx-auto">
                    <TitleSection title="Better information, better health" subtitle="News" />
                    <NewsCarousel />
                </div>
            </div>

            <ContactCtaSection sectionClassName="p-5 pb-15 mt-2" />
        </>
    )
}
