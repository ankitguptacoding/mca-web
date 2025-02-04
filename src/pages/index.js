"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const images = ["/assets/images/waterRO.webp", "/assets/images/banner1.jpeg"];

export default function Home() {
  return (
    <>
    <div style={{marginTop: "150px"}}>
      <Slider></Slider>
    </div>
    </>
    
  );
}

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      // navigation
      loop={true} // Enables infinite loop
      autoplay={{
        delay: 3000, // 3 seconds per slide
        disableOnInteraction: false, // Keep autoplay even after user interaction
      }}
      breakpoints={{
        1350: { slidesPerView: 1 },
        700: { slidesPerView: 1 },
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}