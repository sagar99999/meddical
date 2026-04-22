"use client"
import Image from "next/image"

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
        <Image src="/images/image-1.jpg" alt="doctors image" fill className="absolute object-cover" />
        <div className="bg-[#17225681] absolute top-0 left-0 size-full" />
    </div>
}

// indivisual carousel slide
function CarouselSlide() {
    return <div className="py-50">
        <p className="max-w-165 text-white mx-auto text-2xl tracking-wider text-center leading-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium exercitationem eveniet unde impedit quae repudiandae sit qui, non numquam.
        </p>
        <p className="text-center border-white border-t-2 pt-4 max-w-55 mx-auto mt-7 text-white tracking-wider text-2xl">John Doe</p>
    </div>
}