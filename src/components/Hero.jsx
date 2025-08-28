import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Hero() {
  const slides = [
    {
      image: "/herotiga.jpg",
      title: "Maksimalkan Potensi Villa Anda Bersama Ahlinya",
      description: "Dari reservasi hingga laporan keuangan, semua dikelola dengan standar tinggi dan transparan.",
    },
    {
      image: "/villa4.jpg",
      title: "Tingkatkan Okupansi dan Keuntungan Villa Anda",
      description: "Kami hadir untuk membantu properti Anda mencapai kinerja finansial maksimal dengan strategi pemasaran yang teruji.",
    },
    {
      image: "/herodua.jpg",
      title: "Kenyamanan Tamu, Ketenangan Pemilik",
      description: "Kami memastikan setiap tamu mendapatkan pengalaman menginap terbaik, sehingga Anda bisa fokus pada hal yang lebih penting.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const currentContent = slides[currentSlide];

  return (
    <>
      <section className="relative w-full h-screen">
        <AnimatePresence>
          <motion.img
            key={currentContent.image}
            src={currentContent.image}
            alt="Preview Villa"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center"
            >
              <motion.h1 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight drop-shadow-lg">
                {currentContent.title}
              </motion.h1>
              <motion.div className="border-b-4 border-primary w-24 mt-4 mb-6" />
              <motion.p className="text-base md:text-lg font-lora text-gray-200 max-w-2xl mx-auto mb-8">
                {currentContent.description}
              </motion.p>
              
              {/* === BUTTON INI SEKARANG BERADA DALAM ANIMATEPRESENCE === */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex gap-4"
              >
                <a
                  href="#service"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-secondary transition-colors duration-300 transform hover:scale-105"
                >
                  Lihat Layanan Kami
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition-colors duration-300 z-20"
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition-colors duration-300 z-20"
          aria-label="Next Slide"
        >
          <FaChevronRight size={24} />
        </button>
      </section>
      
      {/* Bagian About - Kode tidak diubah */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="w-full relative h-[450px] md:h-[600px] lg:h-[700px] rounded-lg shadow-2xl overflow-hidden">
            <img
              src="/aboutdua.jpg" 
              alt="Main Villa"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <a 
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <button className="flex items-center justify-center p-6 rounded-full bg-white bg-opacity-70 text-gray-800 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <FaPlay size={30} />
              </button>
            </a>
          </div>

          <div className="relative w-full h-full flex flex-col justify-center text-center lg:text-left">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight text-center lg:text-left">
              Ketenangan Pikiran,<br /> Investasi Terus Bertumbuh
            </h2>
            <p className="font-lora text-gray-600 leading-relaxed text-center lg:text-left">
              Kami hadir untuk memberikan solusi manajemen properti yang terpercaya, memastikan setiap detail operasional berjalan sempurna. Dengan layanan personal dan strategi yang terarah, kami tidak hanya menjaga aset Anda, tetapi juga membantu investasi Anda berkembang maksimal.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 mt-12 w-full justify-center lg:justify-start">
              <div className="relative w-full md:w-1/2 h-64 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/abouttiga.jpg" 
                  alt="Small Villa 2"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="relative w-full md:w-1/2 h-64 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/aboutsatu.jpg" 
                  alt="Small Villa 1"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            
            <a
              href="/about" 
              className="mt-8 max-w-max px-6 py-3 bg-secondary text-white font-semibold rounded-full shadow-lg hover:bg-primary transition-colors duration-300 transform hover:scale-105 inline-block mx-auto lg:mx-0"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </section>
    </>
  );
}