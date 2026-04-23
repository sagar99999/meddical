import TitleSection from "@/components/app/title-section";
import InfoSection from "@/components/app/info-section";
import NewsCarousel from "@/components/app/news-carousel";
import DoctorsCarousel from "@/components/app/doctors-carousel";
import { HeartPulse } from "lucide-react";
import { specialties } from "@/lib/constants";
import Image from "next/image";
import { BandAidIcon } from "@/components/icons/app";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-5 pt-15">
        <div className="max-w-340 mx-auto">
          <TitleSection title="Care you can believe in" subtitle="Our Services" />
          <div className="flex gap-6 items-start">
            <div className="border h-auto rounded-sm overflow-hidden shrink-0 basis-45">
              <div className="flex p-3 py-6 group transition-colors duration-300 hover:bg-brand-1 flex-col items-center gap-2 text-center">
                <BandAidIcon styleClass="text-brand group-hover:text-brand-2 transition-colors duration-300 size-12" />
                <p className="group-hover:text-brand-2 transition-colors duration-300 tracking-wide">Free Checkup</p>
              </div>
              <div className="flex p-3 py-6 group transition-colors duration-300 hover:bg-brand-1 flex-col items-center gap-2 text-center">
                <BandAidIcon styleClass="text-brand group-hover:text-brand-2 transition-colors duration-300 size-12" />
                <p className="group-hover:text-brand-2 transition-colors duration-300 tracking-wide">Cardiogram</p>
              </div>
              <div className="flex p-3 py-6 group transition-colors duration-300 hover:bg-brand-1 flex-col items-center gap-2 text-center">
                <BandAidIcon styleClass="text-brand group-hover:text-brand-2 transition-colors duration-300 size-12" />
                <p className="group-hover:text-brand-2 transition-colors duration-300 tracking-wide">DNA Test</p>
              </div>
              <div className="flex p-3 py-6 group transition-colors duration-300 hover:bg-brand-1 flex-col items-center gap-2 text-center">
                <BandAidIcon styleClass="text-brand group-hover:text-brand-2 transition-colors duration-300 size-12" />
                <p className="group-hover:text-brand-2 transition-colors duration-300 tracking-wide">Blood Bank</p>
              </div>
              <Link className="bg-brand-1 text-brand-2 p-2.5 tracking-wide hover:underline block text-center" href="/services">View All</Link>
            </div>
            <div>
              <p className="text-4xl mb-8 tracking-wide font-semibold">A passion for for putting patients first.</p>
              <ul className="grid gap-4 mb-8 grid-cols-2 list-none text-lg tracking-wider">
                <li className="relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5">A Passion for Healing</li>
                <li className="relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5">5-Star Care</li>
                <li className="relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5">All our Best</li>
                <li className="relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5">Believe in Us</li>
                <li className="relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5">A Legacy of Excellence</li>
                <li className="relative pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5">Always Caring</li>
              </ul>
              <p className="tracking-wider mb-8 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic, ipsum eum sapiente voluptate, voluptatem placeat mollitia natus corrupti modi commodi similique, magni recusandae omnis voluptatibus vero molestias nulla. Accusamus similique dignissimos, vero veniam eligendi mollitia. Modi, dolor omnis. Dicta dolorum eveniet vero aliquid non vel repellendus consequatur praesentium placeat.
              </p>
              <p className="tracking-wider text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos possimus deserunt quae beatae, architecto nobis dicta sunt. Consectetur optio temporibus minima ex vero a velit. Ratione, alias ut ullam fugiat dicta, praesentium tempore omnis enim aut modi neque incidunt quidem delectus culpa earum possimus! Odio illum doloribus quaerat voluptatem fuga.
              </p>
            </div>
            <div className="shrink-0 basis-90">
              <div className="mb-8">
                <div className="h-70 relative">
                  <Image src="/images/image-1.jpg" alt="doctor image" fill className="absolute object-cover" />
                </div>
                <div className="h-1.5 flex">
                  <div className="bg-brand-2 h-full basis-[25%]" />
                  <div className="bg-brand-1 h-full basis-[50%]" />
                  <div className="bg-brand h-full basis-[25%]" />
                </div>
              </div>
              <div>
                <div className="h-70 relative">
                  <Image src="/images/image-1.jpg" alt="doctor image" fill className="absolute object-cover" />
                </div>
                <div className="h-1.5 flex">
                  <div className="bg-brand-2 h-full basis-[25%]" />
                  <div className="bg-brand-1 h-full basis-[50%]" />
                  <div className="bg-brand h-full basis-[25%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 pt-15">
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
  );
}
