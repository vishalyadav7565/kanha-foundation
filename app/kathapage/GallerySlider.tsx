"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type GallerySliderProps = {
  images: string[];
};

export default function GallerySlider({ images }: GallerySliderProps) {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Katha Gallery
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
      >
        {images?.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt="gallery"
              className="rounded-xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}