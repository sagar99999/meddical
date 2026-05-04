"use client"
import Image from "next/image"
import { QuoteIcon } from "../icons/app";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function TestimonialCarousel() {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class="${className} testimonial-carousel"></span>`;
        },
    };
    return <div className="relative bg-brand-1">
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <CarouselSlide />
            </SwiperSlide>
            <SwiperSlide>
                <CarouselSlide />
            </SwiperSlide>
        </Swiper>
        <Image src="/images/hero-2.jpg" alt="doctors image" fill sizes="100vw" className="absolute object-cover" />
        <div className="bg-[#17225681] absolute top-0 left-0 size-full" />
    </div>
}

// indivisual carousel slide
function CarouselSlide() {
    return <div className="py-35 relative">
        <p className="max-w-165 text-white mx-auto text-2xl text-center leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium exercitationem eveniet unde impedit quae repudiandae sit qui, non numquam. Unde impedit quae repudiandae sit qui, non numquam.
        </p>
        <p className="text-center border-white border-t-2 pt-4 max-w-55 mx-auto mt-7 text-white tracking-wider text-2xl">John Doe</p>
        <QuoteIcon styleClass="text-brand-2 size-11 translate-x-[-50%] absolute top-18 left-[50%]" />
    </div>
}