import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

// Gabungkan CTA dan Footer dalam satu komponen
export default function Footer() {
  return (
    <>
      {/* ================= Bagian CTA Interaktif ================= */}
      <section
        className="relative py-20 px-6 md:px-11 lg:px-14 xl:px-2 bg-cover bg-center"
        style={{ backgroundImage: "url('/villa/umami/villamanajementdua.jpg')" }} // Ganti dengan gambar latar CTA Anda
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay Gelap */}

        <div className="relative z-10 text-center">
          <h3 className="font-playfair text-3xl md:text-5xl font-bold text-white leading-snug mb-4 drop-shadow-lg">
            Waktunya Villa Anda Dikelola oleh Ahlinya
          </h3>
          <p className="font-lora text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            Satu percakapan bisa jadi awal perubahan besar. Mari diskusikan strategi terbaik
            untuk menjadikan villa Anda lebih menguntungkan.
          </p>
          <a
            href="#" // Ganti dengan URL halaman kontak atau formulir
            className="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-secondary transition-colors duration-300 transform hover:scale-105 inline-block"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </section>

      <footer className="bg-brown px-6 md:px-11 lg:px-14 xl:px-2 text-white py-20 px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Kolom 1: Brand + Sosmed */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={"/logodua.png"}
                alt="Logo"
                className="h-10 md:h-12 transition-all duration-300"
              />
            </div>
            <p className="font-lora text-sm text-slate-300 mb-4">
              Partner terpercaya dalam mengelola dan mengoptimalkan potensi villa Anda.
            </p>
            <div className="flex space-x-4 text-xl text-white">
              <a href="#" className="hover:text-primary"><FaFacebookF /></a>
              <a href="#" className="hover:text-primary"><FaInstagram /></a>
              <a href="#" className="hover:text-primary"><FaTwitter /></a>
              <a href="#" className="hover:text-primary"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Kolom 2: Link Utama */}
          <div>
            <h3 className="font-raleway font-semibold text-white mb-3">Link</h3>
            <ul className="font-lora space-y-2 text-slate-300">
              <li><a href="/" className="hover:text-primary transition-colors duration-200">Home</a></li>
              <li><a href="/produk" className="hover:text-primary transition-colors duration-200">Pilar Produk</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors duration-200">Tentang Kami</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors duration-200">Kontak</a></li>
            </ul>
          </div>

          {/* Kolom 3: Layanan Kami (Konten Baru) */}
          <div>
            <h3 className="font-raleway font-semibold text-white mb-3">Package Kami</h3>
            <ul className="font-lora space-y-2 text-slate-300">
              <li><a href="/layanan/manajemen" className="hover:text-primary transition-colors duration-200">Full Management</a></li>
              <li><a href="/layanan/pemasaran" className="hover:text-primary transition-colors duration-200">Online Marketing</a></li>
            </ul>
          </div>

          {/* Kolom 4: Hubungi Kami */}
          <div>
            <h3 className="font-raleway font-semibold text-white mb-3">Hubungi Kami</h3>
            <div className="font-lora text-slate-300 space-y-2">
              <div className="flex items-center space-x-2">
                <MdPhone />
                <span>0812-xxxx-xxxx</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdEmail />
                <span>info@manajemenvilla.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdLocationOn />
                <span>Jl. Sunset Road No.88, Bali</span>
              </div>
            </div>
          </div>

          {/* Kolom 5: Berlangganan Newsletter (Konten Diubah) */}
        
        </div>

        {/* Copyright */}
        <div className="border-t border-white mt-10 pt-6 text-center text-sm text-white">
          © 2025 Manajemen Villa. Powered by Bombora.
        </div>
      </footer>
    </>
  );
}