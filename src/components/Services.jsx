import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBroom,
  FaUsers,
  FaTools,
  FaGlobe,
  FaChartLine,
  FaFileInvoice,
  FaHandHoldingUsd,
  FaTree,
  FaSwimmingPool,
  FaCouch,
  FaKey,
  FaShuttleVan,
  FaSuitcase,
} from "react-icons/fa";
import ServicesHome from "./ServicesHome";

// ====================== DATA LAYANAN ======================
const servicesData = [
  {
    id: "Service",
    label: "Service",
    services: [
      {
        title: "Housekeeping",
        description:
          "Kebersihan adalah standar utama kenyamanan tamu. Tim housekeeping kami terlatih menjaga villa Anda tetap bersih, rapi, dan siap dihuni setiap saat.",
        icon: <FaBroom />,
      },
      {
        title: "Hospitality",
        description:
          "Pelayanan ramah dan profesional yang memastikan setiap tamu merasa diperhatikan, nyaman, dan mendapatkan pengalaman menginap terbaik di villa Anda.",
        icon: <FaUsers />,
      },
      {
        title: "Maintenance",
        description:
          "Perawatan teknis rutin yang mencegah kerusakan besar dan memastikan seluruh fasilitas villa selalu berfungsi optimal.",
        icon: <FaTools />,
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
      },
      {
        title: "Digital Marketing",
        description:
          "Strategi pemasaran digital yang inovatif, termasuk optimasi SEO, iklan media sosial, dan kampanye email untuk meningkatkan visibilitas villa Anda.",
        icon: <FaChartLine />,
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
      },
      {
        title: "Pembagian Hasil",
        description:
          "Pembayaran hasil sewa villa yang teratur dan tepat waktu sesuai dengan perjanjian yang telah disepakati.",
        icon: <FaHandHoldingUsd />,
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
      },
      {
        title: "Kolam Renang",
        description:
          "Pembersihan dan perawatan kolam renang secara berkala untuk menjamin kebersihan dan kualitas air yang optimal.",
        icon: <FaSwimmingPool />,
      },
      {
        title: "Interior Care",
        description:
          "Perawatan berkala pada interior dan furnitur untuk menjaga kondisi villa tetap prima.",
        icon: <FaCouch />,
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
      },
      {
        title: "Airport Transfer",
        description:
          "Layanan penjemputan dan pengantaran bandara yang dapat diandalkan, memberikan kenyamanan ekstra bagi tamu Anda.",
        icon: <FaShuttleVan />,
      },
      {
        title: "Tour Package",
        description:
          "Paket tour eksklusif untuk tamu menjelajahi destinasi lokal dengan nyaman, aman, dan dipandu profesional.",
        icon: <FaSuitcase />,
      },
    ],
  },
];

// ====================== COMPONENT ======================
const Services = ({
  sectionSubtitle = "Tim kami menjalankan operasional villa dengan standar profesional, memastikan properti Anda terawat dan tamu merasa nyaman.",
}) => {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const activeServices = servicesData.find((tab) => tab.id === activeTab);

  return (
    <>
    <section className="py-20 px-6 md:px-11 lg:px-14 xl:px-28">
      {/* Header */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h3 className="font-raleway text-lg font-semibold text-gray-500 mb-2">
          Operasional Villa
        </h3>
        <h2 className="font-playfair text-3xl md:text-4xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold leading-snug">
          Pengelolaan Harian Villa untuk Kenyamanan <br /> Tamu & Perawatan Properti
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
              ${activeTab === tab.id
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

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeServices?.services?.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl border border-gray-100 transition transform hover:-translate-y-1"
          >
            <div className="text-primary text-4xl mb-6">{service.icon}</div>
            <h3 className="font-playfair text-2xl font-bold mb-3">{service.title}</h3>
            <p className="font-lora text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
    <ServicesHome/>
    </>
  );
};

export default Services;
