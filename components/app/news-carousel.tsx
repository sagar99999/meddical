"use client"
import Image from "next/image"
import { Eye, Heart } from "lucide-react"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function NewsCarousel() {
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
    return <div className="grid mb-18 gap-6 grid-cols-2 grid-rows-2">
        <div className='flex gap-6 rounded-sm overflow-hidden'>
            <div className='size-45 relative'>
                <Image className='size-50 object absolute object-cover' src="/images/image-2.jpg" alt="doctor" fill />
            </div>
            <div>
                <p className='text-brand mb-3 tracking-wide line-clamp-2'>Monday 05, September 2021 | By Author</p>
                <p className='text-lg mb-3 line-clamp-2'>This Article title goes here, but not too long.</p>
                <div className="flex gap-4">
                    <div className='flex gap-2 items-center'>
                        <Eye className='size-6 text-brand-1' />
                        <span>64</span>
                    </div>
                    <button className='cursor-pointer flex gap-2 items-center'>
                        <Heart className='size-6 text-red-600' />
                        <span>64</span>
                    </button>

                </div>
            </div>
        </div>
        <div className='flex gap-6 rounded-sm overflow-hidden'>
            <div className='size-45 relative'>
                <Image className='size-50 object absolute object-cover' src="/images/image-2.jpg" alt="doctor" fill />
            </div>
            <div>
                <p className='text-brand mb-3 tracking-wide line-clamp-2'>Monday 05, September 2021 | By Author</p>
                <p className='text-lg tracking-wide mb-3 line-clamp-2'>This Article title goes here, but not too long.</p>
                <div className="flex gap-4">
                    <div className='flex gap-2 items-center'>
                        <Eye className='size-6 text-brand-1' />
                        <span>64</span>
                    </div>
                    <button className='cursor-pointer flex gap-2 items-center'>
                        <Heart className='size-6 text-red-600' />
                        <span>64</span>
                    </button>

                </div>
            </div>
        </div>
        <div className='flex gap-6 rounded-sm overflow-hidden'>
            <div className='size-45 relative'>
                <Image className='size-50 object absolute object-cover' src="/images/image-2.jpg" alt="doctor" fill />
            </div>
            <div>
                <p className='text-brand mb-3 tracking-wide line-clamp-2'>Monday 05, September 2021 | By Author</p>
                <p className='text-lg tracking-wide mb-3 line-clamp-2'>This Article title goes here, but not too long.</p>
                <div className="flex gap-4">
                    <div className='flex gap-2 items-center'>
                        <Eye className='size-6 text-brand-1' />
                        <span>64</span>
                    </div>
                    <button className='cursor-pointer flex gap-2 items-center'>
                        <Heart className='size-6 text-red-600' />
                        <span>64</span>
                    </button>

                </div>
            </div>
        </div>
        <div className='flex gap-6 rounded-sm overflow-hidden'>
            <div className='size-45 relative'>
                <Image className='size-50 object absolute object-cover' src="/images/image-2.jpg" alt="doctor" fill />
            </div>
            <div>
                <p className='text-brand mb-3 tracking-wide line-clamp-2'>Monday 05, September 2021 | By Author</p>
                <p className='text-lg tracking-wide mb-3 line-clamp-2'>This Article title goes here, but not too long.</p>
                <div className="flex gap-4">
                    <div className='flex gap-2 items-center'>
                        <Eye className='size-6 text-brand-1' />
                        <span>64</span>
                    </div>
                    <button className='cursor-pointer flex gap-2 items-center'>
                        <Heart className='size-6 text-red-600' />
                        <span>64</span>
                    </button>

                </div>
            </div>
        </div>
    </div>
}