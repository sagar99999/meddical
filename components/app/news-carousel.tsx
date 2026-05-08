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
import { chunkArray } from "@/lib/utils";
import Link from "next/link";

export type NewsCarouselProps = {
    _id: string;
    image: string;
    title: string;
    likes: number;
    views: number;
    createAt: Date;
    slug: string;
}

export default function NewsCarousel({ news }: { news: NewsCarouselProps[] }) {

    const chunkedNews = chunkArray(news, 4)

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
        {
            chunkedNews.length && chunkedNews.map(news => <SwiperSlide>
                <CarouselSlide news={news} />
            </SwiperSlide>)
        }
    </Swiper>
}

// indivisual carousel slide
function CarouselSlide({ news }: { news: NewsCarouselProps[] }) {
    return <div className="grid mb-18 gap-6 grid-cols-2 grid-rows-2">
        {
            news.length && news.map(singleNews => (
                <Link href={`/news/${singleNews.slug}`} key={singleNews._id}>
                    <div className='flex gap-6 rounded-sm overflow-hidden'>
                        <div className='size-45 relative'>
                            <Image className='size-50 object absolute object-cover' src={singleNews.image} alt={singleNews.title} fill sizes="180px" />
                        </div>
                        <div>
                            <p className='text-brand mb-3 tracking-wide line-clamp-2'>Monday 05, September 2021 | By Author</p>
                            <p className='text-lg mb-3 line-clamp-2'>{singleNews.title}</p>
                            <div className="flex gap-4">
                                <div className='flex gap-1 items-center'>
                                    <Eye className='size-6 text-brand-1' />
                                    <span>{singleNews.views}</span>
                                </div>
                                <button className='cursor-pointer flex gap-1 items-center'>
                                    <Heart className='size-6 text-red-600' />
                                    <span>{singleNews.likes}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
}