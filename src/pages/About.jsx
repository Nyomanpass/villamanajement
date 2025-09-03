import React from "react";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
   <>
   <Navbar/>
     <div className="h-[40vh] relative">
        <img src="/villa/umami/villamanajementsatu.jpg" alt="Hero Image" className="absolute left-0 w-full h-full object-cover z-[-2]" />
        {/* Overlay Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[-1]"></div>

        {/* Content */}
       <div className="flex flex-col justify-center items-center h-full mx-6 md:mx-12 lg:mx-16 xl:mx-28 pt-12 z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white">
            About Us
          </h2>
          <p className="text-white max-w-2xl mx-auto mt-3">
            Kami adalah tim profesional yang fokus pada manajemen villa di Bali,
            menghadirkan layanan terpercaya untuk pemilik sekaligus pengalaman
            berkesan bagi setiap tamu.
          </p>
        </div>
      </div>

      </div>

<section className="w-full bg-white py-20 px-6 md:px-11 lg:px-14 xl:px-28">
  <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
    {/* Konten di kiri (Untuk layar besar) */}
    <div className="w-full text-gray-700">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
        Mengenal Lebih Dekat <br />
        <span className="text-secondary">Dina Amelya</span>
      </h2>

      <p className="mb-4 font-lora leading-relaxed">
        Selamat datang di layanan manajemen vila kami. Saya **Dina Amelya**, pendiri dengan pengalaman lebih dari 15 tahun dalam industri perhotelan dan properti. Perjalanan saya dimulai dari kecintaan mendalam terhadap keindahan alam Indonesia dan hasrat untuk menciptakan pengalaman menginap yang tak terlupakan bagi setiap tamu.
      </p>

      <p className="mb-6 font-lora leading-relaxed">
        Filosofi kami berakar pada satu prinsip sederhana: **"Your Property Is Our Priority"**. Setiap vila yang kami kelola diperlakukan seperti properti kami sendiri, dengan perhatian penuh pada setiap detail, mulai dari perawatan rutin hingga memastikan tamu merasa seperti di rumah. Pendekatan ini bukan sekadar bisnis, melainkan dedikasi personal untuk menjaga kualitas dan integritas properti Anda.
      </p>

      <div className="p-6 bg-primary/10 rounded-lg border-l-4 border-primary shadow-sm mt-8">
        <p className="italic font-lora text-gray-800">
          "Kami yakin bahwa manajemen vila yang sukses dibangun di atas kepercayaan dan komunikasi yang transparan. Kami tidak hanya mengelola properti, tetapi juga membangun kemitraan yang kuat dengan para pemilik untuk mencapai tujuan bersama."
        </p>
      </div>
    </div>

    {/* Gambar di kanan (Untuk layar besar) */}
    <div className="w-full  flex justify-center lg:justify-end">
      <img
        src="/villa/uliwood/villamanajementsatu.jpg" // Ganti dengan gambar Dina Amelya
        alt="Dina Amelya, Pendiri"
        className="w-full h-full rounded-xl shadow-2xl object-cover transform transition-all duration-300 hover:scale-105"
      />
    </div>
  </div>
</section>
    <Services/>
    <br /><br /><br />
    <Footer/>
   </>
  );
}

export default About;
