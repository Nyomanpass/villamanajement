import React from "react";
import { FaUserTie, FaBalanceScale, FaStar, FaBullhorn, FaSmile, FaHandshake } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Judul Utama */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <p className="font-raleway text-lg font-semibold text-gray-500 mb-2">
          Why Choose Us
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold leading-snug">
          Filosofi Kerja yang Kami Junjung Tinggi
        </h2>
        <p className="font-lora text-gray-600 text-base md:text-lg mt-4 max-w-3xl mx-auto">
          Setiap langkah yang kami ambil selalu berlandaskan kualitas, kepercayaan, 
          dan dedikasi demi mengoptimalkan potensi properti Anda.
        </p>
      </div>

      {/* Grid 6 Kolom dengan Kartu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "Profesionalisme",
            desc: "Kami bekerja dengan standar tinggi, memastikan setiap detail operasional dan layanan berjalan sesuai prosedur terbaik.",
            icon: <FaUserTie className="text-white text-2xl" />,
          },
          {
            title: "Transparansi",
            desc: "Setiap laporan, keuangan, dan hasil kerja disampaikan secara terbuka agar pemilik villa selalu merasa tenang dan percaya.",
            icon: <FaBalanceScale className="text-white text-2xl" />,
          },
          {
            title: "Komitmen Kualitas",
            desc: "Kami menjaga properti Anda tetap dalam kondisi prima, memberikan pengalaman terbaik bagi tamu, dan menjaga nilai investasi Anda.",
            icon: <FaStar className="text-white text-2xl" />,
          },
          {
            title: "Inovasi Pemasaran",
            desc: "Strategi pemasaran modern yang memanfaatkan teknologi digital untuk meningkatkan eksposur dan okupansi villa.",
            icon: <FaBullhorn className="text-white text-2xl" />,
          },
          {
            title: "Fokus pada Tamu",
            desc: "Kami mengutamakan kepuasan tamu dengan layanan ramah, profesional, dan penuh perhatian sehingga mereka ingin kembali lagi.",
            icon: <FaSmile className="text-white text-2xl" />,
          },
          {
            title: "Kemitraan Jangka Panjang",
            desc: "Kami bukan hanya penyedia layanan, tapi mitra strategis yang tumbuh bersama Anda dalam mengembangkan bisnis villa.",
            icon: <FaHandshake className="text-white text-2xl" />,
          },
        ].map((item, i) => (
          <div 
            key={i} 
            className="bg-white p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            {/* Icon Bulat */}
            <div className="w-16 h-16 bg-secondary flex items-center justify-center rounded-full mx-auto mb-6 shadow-md">
              {item.icon}
            </div>
            <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="font-lora text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bagian CTA yang Lebih Menarik */}
     
    </section>
  );
}