import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => {
  // data villa dengan gambar dummy
  const villas = {
    "Villa Sunset Paradise": Array.from({ length: 6 }, (_, i) => ({
      id: `sunset-${i}`,
      src: `https://via.placeholder.com/400x300?text=Sunset+Villa+${i + 1}`,
      alt: `Villa Sunset Paradise ${i + 1}`,
    })),
    "Villa Ocean View": Array.from({ length: 6 }, (_, i) => ({
      id: `ocean-${i}`,
      src: `https://via.placeholder.com/400x300?text=Ocean+Villa+${i + 1}`,
      alt: `Villa Ocean View ${i + 1}`,
    })),
    "Villa Mountain Escape": Array.from({ length: 6 }, (_, i) => ({
      id: `mountain-${i}`,
      src: `https://via.placeholder.com/400x300?text=Mountain+Villa+${i + 1}`,
      alt: `Villa Mountain Escape ${i + 1}`,
    }))
  };

  return (
    <>
      <Navbar />
      <div className="h-[40vh] relative">
        <img src="/herotiga.jpg" alt="Hero Image" className="absolute left-0 w-full h-full object-cover z-[-2]" />
        {/* Overlay Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[-1]"></div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center h-full mx-6 md:mx-12 lg:mx-16 xl:mx-28 pt-12 z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white">
              Gallery Villa
            </h2>
            <p className="text-white max-w-2xl mx-auto mt-3">
              Jelajahi keindahan dan kemewahan villa kami melalui koleksi foto yang
              menakjubkan dari setiap sudut properti yang istimewa ini.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
        {Object.entries(villas).map(([villaName, images]) => (
          <div key={villaName} className="mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8">{villaName}</h3>
            <Swiper
              modules={[Navigation, Pagination]}

              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 14,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 14,
                },
              }}
              className="rounded-lg"
            >
              {images.map((img) => (
                <SwiperSlide key={img.id}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 md:h-72 lg:h-96 object-cover bg-primary"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
