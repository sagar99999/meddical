"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import DoctorCard from './doctor-card';


type SocialLinks = {
    facebook: string;
    linkedin: string;
    instagram: string;
}

type Doctor = {
    _id: string;
    department: string;
    image: string;
    name: string;
    slug: string;
    socialLinks: SocialLinks;
}

export default function DoctorsCarousel({ docs }: { docs: Doctor[] }) {

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + '</span>';
        },
    };
    return <Swiper
        slidesPerView={3}
        spaceBetween={16}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
    >

        {
            docs.length && docs.map(doc => (
                <SwiperSlide key={doc._id}>
                    <CarouselSlide _id={doc._id} socialLinks={doc.socialLinks} name={doc.name} department={doc.department} slug={doc.slug} image={doc.image} />
                </SwiperSlide>
            ))
        }

    </Swiper>
}



// indivisual carousel slide
function CarouselSlide({ _id, name, department, slug, image, socialLinks }: Doctor) {
    return <div >
        <DoctorCard department={department} image={image} name={name} slug={slug} socialLinks={{ facebook: socialLinks.facebook, linkedin: socialLinks.linkedin, instagram: socialLinks.instagram }} />
    </div>
}