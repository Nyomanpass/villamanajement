import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
// ====================== DATA LAYANAN ======================
const servicesData = [
  {
    id: "Service",
    labelKey: "servicesSection.tabs.Service.label",
    services: [
      {
        titleKey: "servicesSection.tabs.Service.items.0.title",
        descriptionKey: "servicesSection.tabs.Service.items.0.description",
        icon: <FaBroom />,
      },
      {
        titleKey: "servicesSection.tabs.Service.items.1.title",
        descriptionKey: "servicesSection.tabs.Service.items.1.description",
        icon: <FaUsers />,
      },
      {
        titleKey: "servicesSection.tabs.Service.items.2.title",
        descriptionKey: "servicesSection.tabs.Service.items.2.description",
        icon: <FaTools />,
      },
    ],
  },
  {
    id: "pemasaran",
    labelKey: "servicesSection.tabs.pemasaran.label",
    services: [
      {
        titleKey: "servicesSection.tabs.pemasaran.items.0.title",
        descriptionKey: "servicesSection.tabs.pemasaran.items.0.description",
        icon: <FaGlobe />,
      },
      {
        titleKey: "servicesSection.tabs.pemasaran.items.1.title",
        descriptionKey: "servicesSection.tabs.pemasaran.items.1.description",
        icon: <FaChartLine />,
      },
    ],
  },
  {
    id: "keuangan",
    labelKey: "servicesSection.tabs.keuangan.label",
    services: [
      {
        titleKey: "servicesSection.tabs.keuangan.items.0.title",
        descriptionKey: "servicesSection.tabs.keuangan.items.0.description",
        icon: <FaFileInvoice />,
      },
      {
        titleKey: "servicesSection.tabs.keuangan.items.1.title",
        descriptionKey: "servicesSection.tabs.keuangan.items.1.description",
        icon: <FaHandHoldingUsd />,
      },
    ],
  },
  {
    id: "perawatan",
    labelKey: "servicesSection.tabs.perawatan.label",
    services: [
      {
        titleKey: "servicesSection.tabs.perawatan.items.0.title",
        descriptionKey: "servicesSection.tabs.perawatan.items.0.description",
        icon: <FaTree />,
      },
      {
        titleKey: "servicesSection.tabs.perawatan.items.1.title",
        descriptionKey: "servicesSection.tabs.perawatan.items.1.description",
        icon: <FaSwimmingPool />,
      },
      {
        titleKey: "servicesSection.tabs.perawatan.items.2.title",
        descriptionKey: "servicesSection.tabs.perawatan.items.2.description",
        icon: <FaCouch />,
      },
    ],
  },
  {
    id: "tamu",
    labelKey: "servicesSection.tabs.tamu.label",
    services: [
      {
        titleKey: "servicesSection.tabs.tamu.items.0.title",
        descriptionKey: "servicesSection.tabs.tamu.items.0.description",
        icon: <FaKey />,
      },
      {
        titleKey: "servicesSection.tabs.tamu.items.1.title",
        descriptionKey: "servicesSection.tabs.tamu.items.1.description",
        icon: <FaShuttleVan />,
      },
      {
        titleKey: "servicesSection.tabs.tamu.items.2.title",
        descriptionKey: "servicesSection.tabs.tamu.items.2.description",
        icon: <FaSuitcase />,
      },
    ],
  },
];

// ====================== COMPONENT ======================
const Services = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const activeServices = servicesData.find((tab) => tab.id === activeTab);

  return (
    <>
      <section className="py-20 px-6 md:px-11 lg:px-14 xl:px-28">
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h3 className="font-raleway text-lg font-semibold text-gray-500 mb-2">
            {t("servicesSection.header.category")}
          </h3>
          <h2 className="font-playfair text-3xl md:text-4xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold leading-snug">
            {t("servicesSection.header.title")}
          </h2>
          <p className="font-lora text-gray-600 mt-4 max-w-2xl mx-auto">
            {t("servicesSection.header.subtitle")}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center overflow-x-auto whitespace-nowrap mb-10 pb-2">
          {servicesData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 text-lg font-semibold transition-colors duration-300 mx-2
                ${activeTab === tab.id ? "text-primary" : "text-gray-500 hover:text-primary"}`}
            >
              {t(tab.labelKey)}
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
              <h3 className="font-playfair text-2xl font-bold mb-3">
                {t(service.titleKey)}
              </h3>
              <p className="font-lora text-gray-600">{t(service.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <ServicesHome />
    </>
  );
};

export default Services;
