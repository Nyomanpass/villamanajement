import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBroom,
  FaUsers,
  FaTools,
  FaGlobe,
  FaChartLine,
  FaLaptop,
  FaFileInvoice,
  FaHandHoldingUsd,
  FaTree,
  FaSwimmingPool,
  FaCouch,
  FaKey,
  FaShuttleVan,
} from "react-icons/fa";

// ====================== DATA LAYANAN ======================
const servicesData = [
  {
    id: "operasional",
    label: "Operasional",
    services: [
      {
        title: "Housekeeping",
        description:
          "Kebersihan adalah standar utama kenyamanan tamu. Tim housekeeping kami terlatih menjaga villa Anda tetap bersih, rapi, dan siap dihuni setiap saat.",
        icon: <FaBroom />,
        image: "/services1.jpg",
      },
      {
        title: "Staff Management",
        description:
          "Kami rekrut, latih, dan kelola staf villa Anda sehingga bekerja profesional sesuai SOP, tanpa Anda harus repot mengawasi setiap hari.",
        icon: <FaUsers />,
        image: "/services2.jpg",
      },
      {
        title: "Maintenance",
        description:
          "Perawatan teknis rutin yang mencegah kerusakan besar dan memastikan seluruh fasilitas villa selalu berfungsi optimal.",
        icon: <FaTools />,
        image: "/services3.jpg",
      },
    ],
  },
  {
    id: "pemasaran",
    label: "Pemasaran",
    services: [
      {
        title: "Platform Booking",
        description:
          "Kami mendaftarkan dan mengelola villa Anda di berbagai platform booking ternama untuk menjangkau pasar yang lebih luas.",
        icon: <FaGlobe />,
        image: "/services4.jpg",
      },
      {
        title: "Digital Marketing",
        description:
          "Strategi pemasaran digital yang inovatif, termasuk optimasi SEO, iklan media sosial, dan kampanye email untuk meningkatkan visibilitas villa Anda.",
        icon: <FaChartLine />,
        image: "/services12.jpg",
      },
      {
        title: "Website Management",
        description:
          "Pengelolaan dan pemeliharaan website villa Anda, memastikan website selalu up-to-date dan fungsional.",
        icon: <FaLaptop />,
        image: "/services5.jpg",
      },
    ],
  },
  {
    id: "keuangan",
    label: "Keuangan",
    services: [
      {
        title: "Laporan Bulanan",
        description:
          "Anda akan menerima laporan keuangan bulanan yang terperinci dan transparan, termasuk catatan pemasukan dan pengeluaran.",
        icon: <FaFileInvoice />,
        image: "/services6.jpg",
      },
      {
        title: "Pembagian Hasil",
        description:
          "Pembayaran hasil sewa villa yang teratur dan tepat waktu sesuai dengan perjanjian yang telah disepakati.",
        icon: <FaHandHoldingUsd />,
        image: "/services7.jpg",
      },
    ],
  },
  {
    id: "perawatan",
    label: "Perawatan",
    services: [
      {
        title: "Taman & Landscape",
        description:
          "Perawatan rutin taman dan area lanskap untuk menjaga keindahan dan daya tarik villa Anda.",
        icon: <FaTree />,
        image: "/services8.jpg",
      },
      {
        title: "Kolam Renang",
        description:
          "Pembersihan dan perawatan kolam renang secara berkala untuk menjamin kebersihan dan kualitas air yang optimal.",
        icon: <FaSwimmingPool />,
        image: "/services9.jpg",
      },
      {
        title: "Interior Care",
        description:
          "Perawatan berkala pada interior dan furnitur untuk menjaga kondisi villa tetap prima.",
        icon: <FaCouch />,
        image: "/services10.jpg",
      },
    ],
  },
  {
    id: "tamu",
    label: "Tamu",
    services: [
      {
        title: "Check-in & Concierge",
        description:
          "Layanan check-in dan check-out yang ramah, cepat, dan profesional, serta bantuan concierge untuk memenuhi kebutuhan tamu selama menginap.",
        icon: <FaKey />,
        image: "/services11.jpg",
      },
      {
        title: "Airport Transfer",
        description:
          "Layanan penjemputan dan pengantaran bandara yang dapat diandalkan, memberikan kenyamanan ekstra bagi tamu Anda.",
        icon: <FaShuttleVan />,
        image: "/services13.jpg",
      },
    ],
  },
];

// ====================== COMPONENT ======================
const Services = ({
  sectionTitle = "Layanan Kami, Nilai Lebih untuk Villa Anda",
  sectionSubtitle = "Kami menghadirkan layanan manajemen menyeluruh yang dirancang khusus agar villa Anda tetap terawat, bernilai tinggi, dan menghasilkan keuntungan berkelanjutan.",
}) => {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const activeServices = servicesData.find((tab) => tab.id === activeTab);

  return (
    <section
      className="py-20 px-6 md:px-11 lg:px-14 xl:px-28 bg-gray-50"
    >      
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="font-raleway text-lg font-semibold text-gray-500 mb-2">
          Our Service
        </h3>
        <h2 className="font-playfair text-3xl md:text-4xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold leading-snug">
          {sectionTitle}
        </h2>
        <p className="font-lora text-gray-600 mt-4 max-w-2xl mx-auto">
          {sectionSubtitle}
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center overflow-x-auto whitespace-nowrap mb-10 pb-2">
        {servicesData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-3 text-lg font-semibold transition-colors duration-300 mx-2
              ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.span 
                layoutId="underline"
                className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeServices?.services?.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-[480px] rounded-xl overflow-hidden shadow-lg transform transition duration-300 group"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
              <div className="text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-2">{service.title}</h3>
              <p className="font-lora text-gray-200">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;