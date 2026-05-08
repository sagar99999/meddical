import TitleSection from "@/components/app/title-section";
import NewsCarousel from "@/components/app/news-carousel";
import DoctorsCarousel from "@/components/app/doctors-carousel";
import ContactCtaSection from "@/components/app/contact-cta-section";
import FeatureBulletList from "@/components/app/feature-bullet-list";
import SectionColorDivider from "@/components/app/section-color-divider";
import { HeartPulse, MoveRight, CalendarDays, Users, Banknote } from "lucide-react";
import { specialties } from "@/lib/constants";
import Image from "next/image";
import { BandAidIcon } from "@/components/icons/app";
import Link from "next/link";
import Form1 from "@/components/app/form-1";
import dbConnect from '@/lib/mongoose'
import Doctors from '@/models/doctors'
import News from "@/models/news"

export default async function Home() {

  await dbConnect()
  const docs = await Doctors.find().lean()
  const news = await News.find().lean();

  if (!docs || !news) {
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

  const filteredNews = news.map(singleNews => ({
    _id: singleNews._id.toString(),
    image: singleNews.image,
    title: singleNews.title,
    likes: singleNews.likes,
    views: singleNews.views,
    createAt: singleNews.createdAt,
    slug: singleNews.slug
  }));

  return (
    <>
      <div className="py-60 p-5 bg-[url(/images/hero.jpg)] bg-cover">
        <div className="mx-auto max-w-340">
          <div className="max-w-150">
            <p className="uppercase text-brand text-lg font-bold tracking-wider mb-2">Caring for life</p>
            <h2 className="text-brand-1 text-5xl leading-15 font-semibold mb-8 tracking-wide">Leading the Way in Medical Excellence</h2>
            <Link href="/services" className="bg-brand-2 font-semibold hover:underline text text-brand-1 p-3 px-5 rounded-4xl tracking-wide items-center">Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-center -translate-y-1/2">
        <div className="flex shrink-0 bg-brand-1 px-6 py-7 items-center rounded-sm text-white gap-6">
          <p className="tracking-wide">
            Book an Appointment
          </p>
          <CalendarDays className="size-12" />
        </div>
        <div className="flex shrink-0 bg-brand-2 px-6 py-7 items-center rounded-sm text-brand-1 gap-6">
          <p className="tracking-wide">
            Book an Appointment
          </p>
          <Users className="size-12" />
        </div>
        <div className="flex shrink-0 bg-brand px-6 py-7 items-center rounded-sm text-white gap-6">
          <p className="tracking-wide">
            Book an Appointment
          </p>
          <Banknote className="size-12" />
        </div>
      </div>
      <div className="p-5 mt-5">
        <div className="max-w-340 mx-auto">
          <TitleSection title="Welcome to meddical" subtitle="A Great Place to Receive Care" />
          <p className="tracking-wide -mt-7 mb-8 text-lg mx-auto max-w-200 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla reiciendis natus harum laudantium at nostrum consectetur, autem, expedita sapiente alias earum similique pariatur fugit quae, sint laboriosam mollitia iusto?</p>
          <div className="flex justify-center gap-2 mb-15 items-center">
            <Link className="text-brand text-lg hover:underline" href="/about">
              Learn More
            </Link>
            <MoveRight className="size-5" />
          </div>
          <div className="relative h-100">
            <Image className="absolute object-cover" src="/images/img-1.png" alt="doctor image" fill sizes="(max-width: 1024px) 100vw, 1360px" />
          </div>
          <SectionColorDivider />
        </div>
      </div>
      <div className="p-5 pt-15">
        <div className="max-w-340 mx-auto">
          <TitleSection title="Care you can believe in" subtitle="Our Services" />
          <div className="flex gap-6 items-start">
            <div className="border h-auto rounded-sm overflow-hidden shrink-0 basis-40">
              <div className="flex p-3 py-6 group transition-colors duration-300 hover:bg-brand-1 flex-col items-center gap-2 text-center">
                <BandAidIcon styleClass="text-brand group-hover:text-brand-2 transition-colors duration-300 size-12" />
                <p className="group-hover:text-brand-2 transition-colors duration-300">Free Checkup</p>
              </div>
              <div className="flex p-3 py-6 group transition-colors duration-300 hover:bg-brand-1 flex-col items-center gap-2 text-center">
                <BandAidIcon styleClass="text-brand group-hover:text-brand-2 transition-colors duration-300 size-12" />
                <p className="group-hover:text-brand-2 transition-colors duration-300">Cardiogram</p>
              </div>
              <div className="flex p-3 py-6 group transition-colors duration-300 hover:bg-brand-1 flex-col items-center gap-2 text-center">
                <BandAidIcon styleClass="text-brand group-hover:text-brand-2 transition-colors duration-300 size-12" />
                <p className="group-hover:text-brand-2 transition-colors duration-300">DNA Test</p>
              </div>
              <div className="flex p-3 py-6 group transition-colors duration-300 hover:bg-brand-1 flex-col items-center gap-2 text-center">
                <BandAidIcon styleClass="text-brand group-hover:text-brand-2 transition-colors duration-300 size-12" />
                <p className="group-hover:text-brand-2 transition-colors duration-300">Blood Bank</p>
              </div>
              <Link className="bg-brand-1 text-brand-2 p-2.5 tracking-wide hover:underline block text-center" href="/about">View All</Link>
            </div>
            <div>
              <p className="text-4xl mb-8 font-semibold">A passion for for putting patients first.</p>
              <FeatureBulletList
                className="mb-8"
                items={`A Passion for Healing,
                  5-Star Care,
                  All our Best,
                  Believe in Us,
                  A Legacy of Excellence,
                  Always Caring`}
              />
              <p className="tracking-wide mb-8 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic, ipsum eum sapiente voluptate, voluptatem placeat mollitia natus corrupti modi commodi similique, magni recusandae omnis voluptatibus vero molestias nulla. Accusamus similique dignissimos, vero veniam eligendi mollitia. Modi, dolor omnis. Dicta dolorum eveniet vero aliquid non vel repellendus consequatur praesentium placeat.
              </p>
              <p className="tracking-wide text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos possimus deserunt quae beatae, architecto nobis dicta sunt. Consectetur optio temporibus minima ex vero a velit. Ratione, alias ut ullam fugiat dicta, praesentium tempore omnis enim aut modi neque incidunt quidem delectus culpa earum possimus! Odio illum doloribus quaerat voluptatem fuga.
              </p>
            </div>
            <div className="shrink-0 basis-90">
              <div className="mb-8">
                <div className="h-70 relative">
                  <Image src="/images/img-2.jpg" alt="doctor image" fill sizes="(max-width: 1024px) 100vw, 360px" className="absolute object-cover" />
                </div>
                <SectionColorDivider />
              </div>
              <div>
                <div className="h-70 relative">
                  <Image src="/images/img-3.jpg" alt="doctor image" fill sizes="(max-width: 1024px) 100vw, 360px" className="absolute object-cover" />
                </div>
                <SectionColorDivider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 pt-10">
        <div className="max-w-340 mx-auto">
          <TitleSection title="Always Caring" subtitle="Our Specialties" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
            {specialties.map((item, i) => (
              <div
                key={i}
                className="h-45 sm:h-36 group lg:h-50 bg-white flex flex-col items-center justify-center gap-3 
                 text-center transition-colors hover:rounded-sm duration-300 hover:bg-brand-1 hover:text-white"
              >
                <HeartPulse className="size-14 transition-colors duration-300 group-hover:text-white text-sky-500" />
                <p className="text-sm capitalize tracking-wide sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 mt-10 bg-[url(/images/hero-1.jpg)] bg-cover bg- py-20">
        <div className="max-w-340 mx-auto">
          <div className="flex items-center gap-4">
            <div className="grow">
              <div className="max-w-150">
                <h2 className="text-brand text-4xl tracking-wider mb-6">Book an Appointment</h2>
                <p className="tracking-wide text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quia at. Libero, dolores! Eligendi quas expedita quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quia at. Libero, dolores! Eligendi quas expedita quisquam exercitationem rem placeat recusandae. s
                </p>
              </div>
            </div>

            <div className="shrink-0 basis-140">
              <Form1 />
            </div>
          </div>

        </div>
      </div>
      <div className="p-5 pt-10">
        <div className="max-w-340 mx-auto">
          <TitleSection title="Trusted Care" subtitle="Our Doctors" />
          <DoctorsCarousel docs={filteredDocs} />
        </div>
      </div>
      <div className="p-5 mt-2">
        <div className="max-w-340 mx-auto">
          <TitleSection title="Better information, better health" subtitle="News" />
          <NewsCarousel news={filteredNews} />
        </div>
      </div>
      <ContactCtaSection sectionClassName="p-5 pb-15 mt-2" />
    </>
  );
}
