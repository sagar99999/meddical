"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import DoctorCard from './doctor-card';

export default function DoctorsCarousel() {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + '</span>';
        },
    };
    return <Swiper
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
}



// indivisual carousel slide
function CarouselSlide() {
    return <div className="grid gap-8 grid-cols-3 mb-18">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
    </div>
}