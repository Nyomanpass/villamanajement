import React from "react";
import {
  FaTools,
  FaHandshake,
  FaHeadset,
  FaHome,
  FaKey,
  FaCalendarCheck,
  FaChalkboardTeacher,
  FaFileInvoice,
  FaGlobe, 
  FaSearch, 
  FaCamera, 
  FaChartLine
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function Layanan() {
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
            Our Services
          </h2>
          <p className="text-white max-w-2xl mx-auto mt-3">
            Kami menyediakan layanan manajemen villa profesional di Bali, mulai dari
            pemasaran, pemeliharaan, hingga pelayanan tamu.
          </p>
        </div>
      </div>

      </div>

       <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">We Care</h2>
      </div>

      {/* Narasi satu kolom tengah */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-gray-600 leading-relaxed">
          Dari kebersihan, taman, hingga pemeliharaan listrik & pipa — tim ahli kami siap
          menangani seluruh kebutuhan properti Anda tanpa terkecuali. Dengan standar tinggi
          dan pengalaman yang teruji, kami memastikan setiap villa mendapatkan perhatian
          menyeluruh. Setiap detail diperhatikan secara cermat, mulai dari perawatan rutin
          harian hingga penanganan teknis yang lebih kompleks, agar kenyamanan tetap
          optimal dan gangguan dapat diminimalisir. Dengan pendekatan yang transparan dan
          profesional, Anda dapat merasa tenang karena properti selalu berada dalam
          pengawasan yang tepat.
        </p>
      </div>

      {/* Highlight Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <FaTools className="text-primary text-4xl mx-auto mb-4" />,
            title: "Pemeliharaan Villa",
            desc: "Properti dirawat dengan teliti oleh tim profesional.",
          },
          {
            icon: <FaHeadset className="text-primary text-4xl mx-auto mb-4" />,
            title: "Pelayanan Tamu",
            desc: "Tim siaga penuh untuk membantu tamu setiap hari.",
          },
          {
            icon: <FaHome className="text-primary text-4xl mx-auto mb-4" />,
            title: "Desain Interior",
            desc: "Bantuan penataan ulang interior agar lebih nyaman.",
          },
          {
            icon: <FaHandshake className="text-primary text-4xl mx-auto mb-4" />,
            title: "Komunikasi",
            desc: "Manajer villa menjaga komunikasi & kepercayaan penuh.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            {item.icon}
            <h4 className="font-semibold text-gray-800">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>


    <section className="relative w-full bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">We Manage</h2>
      </div>

      {/* Narasi satu kolom tengah */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-gray-600 leading-relaxed">
          Kami mengelola properti Anda dengan penuh transparansi, mulai dari strategi pemasaran
          kreatif hingga operasional sehari-hari. Dengan pendekatan yang sistematis, setiap proses
          dikelola secara profesional oleh tim berpengalaman. Kami memastikan properti Anda
          mendapatkan reservasi yang menguntungkan, staf yang terlatih sesuai standar, serta laporan
          keuangan yang transparan dan mudah dipantau. Semua ini kami lakukan agar Anda merasa
          tenang dan yakin bahwa properti selalu dalam kondisi terbaik.
        </p>
      </div>

      {/* Highlight Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {[
          {
            icon: <FaKey className="text-primary text-4xl mx-auto mb-4" />,
            title: "Penyewaan & Pemasaran",
            desc: "Properti Anda dipasarkan dengan strategi kreatif & efektif.",
          },
          {
            icon: <FaCalendarCheck className="text-primary text-4xl mx-auto mb-4" />,
            title: "Pemesanan & Reservasi",
            desc: "Proses booking efisien dengan sistem kalender online modern.",
          },
          {
            icon: <FaTools className="text-primary text-4xl mx-auto mb-4" />,
            title: "Operasional Properti",
            desc: "Staf operasional & manajemen disediakan penuh untuk properti Anda.",
          },
          {
            icon: <FaChalkboardTeacher className="text-primary text-4xl mx-auto mb-4" />,
            title: "Pelatihan Staf",
            desc: "Setiap staf dilatih untuk memenuhi standar profesional.",
          },
          {
            icon: <FaFileInvoice className="text-primary text-4xl mx-auto mb-4" />,
            title: "Laporan Bulanan",
            desc: "Transparansi penuh melalui laporan keuangan rutin & jelas.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            {item.icon}
            <h4 className="font-semibold text-gray-800">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">We Amplify</h2>
      </div>

      {/* Narasi satu kolom tengah */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-gray-600 leading-relaxed">
          Di era digital, kekuatan promosi online menjadi kunci kesuksesan properti Anda. 
          Melalui strategi distribusi global, optimasi SEO, branding di media sosial, 
          serta visual profesional, kami membantu properti Anda menonjol di pasar yang kompetitif. 
          Semua langkah dilakukan dengan evaluasi berkelanjutan agar hasil selalu maksimal.
        </p>
      </div>

      {/* Highlight Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {[
          {
            icon: <FaGlobe className="text-primary text-4xl mx-auto mb-4" />,
            title: "Distribusi E-Commerce",
            desc: "Properti terdaftar di mitra agen, database klien, & platform perjalanan online.",
          },
          {
            icon: <FaSearch className="text-primary text-4xl mx-auto mb-4" />,
            title: "SEO & Sosial Media",
            desc: "Website responsif & branding kuat di berbagai media sosial.",
          },
          {
            icon: <FaCamera className="text-primary text-4xl mx-auto mb-4" />,
            title: "Foto & Videography",
            desc: "Pengambilan gambar profesional, video drone, dan visual berkualitas tinggi.",
          },
          {
            icon: <FaChartLine className="text-primary text-4xl mx-auto mb-4" />,
            title: "Evaluasi Berkelanjutan",
            desc: "Monitoring & perbaikan terus-menerus untuk hasil optimal.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            {item.icon}
            <h4 className="font-semibold text-gray-800">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>


    <Footer/>
    </>
  );
}
