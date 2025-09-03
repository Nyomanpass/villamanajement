import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServicesHome() {
  const { t } = useTranslation();

  // Ambil data dari JSON i18n
  const services = t("servicesHome.cards", { returnObjects: true });
  const header = t("servicesHome.header", { returnObjects: true });
  const button = t("servicesHome.button", { returnObjects: true });

  return (
    <section className="w-full px-6 md:px-11 lg:px-14 xl:px-28 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="font-raleway text-lg font-semibold text-gray-500 mb-2">
          {header.subtitle}
        </h3>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          {header.title}
        </h2>
        <p className="font-lora text-gray-600 mt-4 max-w-2xl mx-auto">
          {header.description}
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group h-[500px] shadow-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black/30 mix-blend-multiply transition-opacity duration-500"></div>

            <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
              <span className="text-white font-bold text-lg md:text-xl border border-white px-6 py-2 rounded-md group-hover:bg-white group-hover:text-secondary transition">
                {service.title}
              </span>
              <p className="text-white mt-4 opacity-0 group-hover:opacity-100 transition duration-500">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol bawah */}
      <div className="text-center mt-10">
        <Link
          to={button.link}
          className="inline-block bg-secondary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-borwn transition"
        >
          {button.text}
        </Link>
      </div>
    </section>
  );
}
