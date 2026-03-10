"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function GallerySlider({images}) {
  return (

    <div className="max-w-6xl mx-auto py-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        Katha Gallery
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay
        loop
      >

        {images.map((img,i)=>(
          <SwiperSlide key={i}>
            <img
              src={img}
              className="rounded-xl shadow-lg"
            />
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}