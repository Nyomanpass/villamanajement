import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => {
const villas = {
  "Poedja Villa Jimbaran": [
    {
      id: "poedja-1",
      src: "/villa/poedja/villa4.jpg",
      alt: "Villa Poedja villa jimbaran 1",
    },
   {
      id: "poedja-2",
      src: "/villa/poedja/villa6.jpg",
      alt: "Villa Poedja villa jimbaran 2",
    },
    {
      id: "poedja-3",
      src: "/villa/poedja/villa3.jpg",
      alt: "Villa Poedja villa jimbaran 3",
    },
     {
      id: "poedja-6",
      src: "/villa/poedja/villa5.jpg",
      alt: "Villa Poedja villa jimbaran 6",
    },
    {
      id: "poedja-4",
      src: "/villa/poedja/villa1.jpg",
      alt: "Villa Poedja villa jimbaran 4",
    },
    {
      id: "poedja-5",
      src: "/villa/poedja/villa2.jpg",
      alt: "Villa Poedja villa jimbaran 5",
    },
   
  ],
  "Umami Villa Jimbaran": [
    {
      id: "umami-1",
      src: "/villa/umami/villamanajementlima.jpg",
      alt: "Villa Umami Villa 1",
    },
    {
      id: "umami-2",
      src: "/villa/umami/villamanajementempat.jpg",
      alt: "Villa Umami Villa 2",
    },
    {
      id: "umami-3",
      src: "/villa/umami/villamanajementtiga.jpg",
      alt: "Villa Umami Villa 3",
    },
    {
      id: "umami-4",
      src: "/villa/umami/villamanajementdua.jpg",
      alt: "Villa Umami Villa 4",
    },
    {
      id: "umami-5",
      src: "/villa/umami/villamanajementsatu.jpg",
      alt: "Villa Umami Villa 5",
    },
  ],
  "Uliwood Villa Jimbaran": [
    {
      id: "uliwood-1",
      src: "/villa/uliwood/villamanajementsatu.jpg",
      alt: "Villa Uliwood villa 1",
    },
     {
      id: "uliwood-2",
      src: "/villa/uliwood/villamanajementdua.jpg",
      alt: "Villa Uliwood villa 2",
    },
   {
      id: "uliwood-3",
      src: "/villa/uliwood/villamanajementtiga.jpg",
      alt: "Villa Uliwood villa 3",
    },
    
  ],

  "Aming Villa Balangan": [
    {
      id: "aming-1",
      src: "/villa/aming/villamanajementsatu.jpg",
      alt: "Villa aming villa 1",
    },
     {
      id: "aming-2",
      src: "/villa/aming/villamanajementdua.jpg",
      alt: "Villa aming villa 2",
    },
   {
      id: "aming-3",
      src: "/villa/aming/villamanajementtiga.jpg",
      alt: "Villa aming villa 3",
    },
    
  ],

  "Villa Merak Balangan": [
    {
      id: "merak-1",
      src: "/villa/merak/villamanajementsatu.jpg",
      alt: "Villa merak villa 1",
    },
     {
      id: "merak-4",
      src: "/villa/merak/villamanajementempat.jpg",
      alt: "Villa merak villa 4",
    },
     {
      id: "merak-5",
      src: "/villa/merak/villamanajementlima.jpg",
      alt: "Villa merak villa 5",
    },
   {
      id: "merak-6",
      src: "/villa/merak/villamanajementenam.jpg",
      alt: "Villa merak villa 6",
    },
     {
      id: "merak-2",
      src: "/villa/merak/villamanajementdua.jpg",
      alt: "Villa merak villa 2",
    },
   {
      id: "merak-3",
      src: "/villa/merak/villamanajementtiga.jpg",
      alt: "Villa merak villa 3",
    },
    
  ],
};


  return (
    <>
      <Navbar />
      <div className="h-[40vh] relative">
        <img src="/villa/umami/villamanajementsatu.jpg" alt="Hero Image" className="absolute left-0 w-full h-full object-cover z-[-2]" />
        {/* Overlay Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[-1]"></div>

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
