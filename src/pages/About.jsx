import React from "react";
import { useTranslation } from "react-i18next";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar/>

      {/* Hero Section */}
      <div className="h-[40vh] relative">
        <img
          src="/villa/umami/villamanajementsatu.jpg"
          alt="Hero Image"
          className="absolute left-0 w-full h-full object-cover z-[-2]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[-1]"></div>

        <div className="flex flex-col justify-center items-center h-full mx-6 md:mx-12 lg:mx-16 xl:mx-28 pt-12 z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t("about.hero_title")}</h2>
            <p className="text-white md:text-md text-sm max-w-2xl mx-auto mt-3">{t("about.hero_desc")}</p>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <section className="w-full bg-white py-20 px-6 md:px-11 lg:px-14 xl:px-28">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full text-gray-700">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t("about.founder_title")} <br />
              <span className="text-secondary">{t("about.founder_name")}</span>
            </h2>

            <p className="mb-4 font-lora leading-relaxed">{t("about.founder_desc1")}</p>
            <p className="mb-6 font-lora leading-relaxed">{t("about.founder_desc2")}</p>

            <div className="p-6 bg-primary/10 rounded-lg border-l-4 border-primary shadow-sm mt-8">
              <p className="italic font-lora text-gray-800">{t("about.founder_quote")}</p>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <img
              src="/villa/poedja/villa4.jpg"
              alt="Dina Amelya, Pendiri"
              className="w-full h-full rounded-xl shadow-2xl object-cover transform transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <Services/>
      <br />
      <br />
      <br />
      <Footer/>
    </>
  );
}

export default About;
