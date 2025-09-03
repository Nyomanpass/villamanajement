import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const careServices = [
    { icon: <FaTools className="text-primary text-4xl mx-auto mb-4" />, dataKey: 0 },
    { icon: <FaHeadset className="text-primary text-4xl mx-auto mb-4" />, dataKey: 1 },
    { icon: <FaHome className="text-primary text-4xl mx-auto mb-4" />, dataKey: 2 },
    { icon: <FaHandshake className="text-primary text-4xl mx-auto mb-4" />, dataKey: 3 },
  ];

  const manageServices = [
    { icon: <FaKey className="text-primary text-4xl mx-auto mb-4" />, dataKey: 0 },
    { icon: <FaCalendarCheck className="text-primary text-4xl mx-auto mb-4" />, dataKey: 1 },
    { icon: <FaTools className="text-primary text-4xl mx-auto mb-4" />, dataKey: 2 },
    { icon: <FaChalkboardTeacher className="text-primary text-4xl mx-auto mb-4" />, dataKey: 3 },
    { icon: <FaFileInvoice className="text-primary text-4xl mx-auto mb-4" />, dataKey: 4 },
  ];

  const amplifyServices = [
    { icon: <FaGlobe className="text-primary text-4xl mx-auto mb-4" />, dataKey: 0 },
    { icon: <FaSearch className="text-primary text-4xl mx-auto mb-4" />, dataKey: 1 },
    { icon: <FaCamera className="text-primary text-4xl mx-auto mb-4" />, dataKey: 2 },
    { icon: <FaChartLine className="text-primary text-4xl mx-auto mb-4" />, dataKey: 3 },
  ];

  return (
    <>
      <Navbar/>

      {/* Hero */}
      <div className="h-[40vh] relative">
        <img src="/villa/umami/villamanajementsatu.jpg" alt="Hero" className="absolute left-0 w-full h-full object-cover z-[-2]" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[-1]"></div>

        <div className="flex flex-col justify-center items-center h-full mx-6 md:mx-12 lg:mx-16 xl:mx-28 pt-12 z-10 text-center">
          <h2 className="text-4xl md:text-5xl  font-bold text-white">{t("services.hero_title")}</h2>
          <p className="text-white max-w-2xl md:text-md text-sm mx-auto mt-3">{t("services.hero_desc")}</p>
        </div>
      </div>

      {/* We Care */}
      <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t("services.we_care_title")}</h2>
        </div>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed">{t("services.we_care_desc")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {careServices.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
              {item.icon}
              <h4 className="font-semibold text-gray-800">{t(`services.care_services.${item.dataKey}.title`)}</h4>
              <p className="text-sm text-gray-600 mt-2">{t(`services.care_services.${item.dataKey}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* We Manage */}
      <section className="relative w-full bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t("services.we_manage_title")}</h2>
        </div>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed">{t("services.we_manage_desc")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {manageServices.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
              {item.icon}
              <h4 className="font-semibold text-gray-800">{t(`services.manage_services.${item.dataKey}.title`)}</h4>
              <p className="text-sm text-gray-600 mt-2">{t(`services.manage_services.${item.dataKey}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* We Amplify */}
      <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t("services.we_amplify_title")}</h2>
        </div>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed">{t("services.we_amplify_desc")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {amplifyServices.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
              {item.icon}
              <h4 className="font-semibold text-gray-800">{t(`services.amplify_services.${item.dataKey}.title`)}</h4>
              <p className="text-sm text-gray-600 mt-2">{t(`services.amplify_services.${item.dataKey}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer/>
    </>
  );
}
