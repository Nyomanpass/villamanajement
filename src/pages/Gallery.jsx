import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
  // contoh data gambar dummy (nanti bisa diganti link gambar asli)
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    src: `https://via.placeholder.com/400x300?text=Villa+${i + 1}`,
    alt: `Villa ${i + 1}`,
  }));

  return (
    <>
            <Navbar/>
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
      {/* Title */}
      

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="w-full h-64 bg-gray-200 rounded-lg shadow-md overflow-hidden group relative"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Gallery;
