import React from "react";
import {
  FaUserTie,
  FaBalanceScale,
  FaStar,
  FaBullhorn,
  FaSmile,
  FaHandshake,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const iconMap = {
  FaUserTie: <FaUserTie className="text-white text-2xl" />,
  FaBalanceScale: <FaBalanceScale className="text-white text-2xl" />,
  FaStar: <FaStar className="text-white text-2xl" />,
  FaBullhorn: <FaBullhorn className="text-white text-2xl" />,
  FaSmile: <FaSmile className="text-white text-2xl" />,
  FaHandshake: <FaHandshake className="text-white text-2xl" />,
};

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const header = t("whyChooseUs.header", { returnObjects: true });
  const cards = t("whyChooseUs.cards", { returnObjects: true });

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Judul Utama */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <p className="font-raleway text-lg font-semibold text-gray-500 mb-2">
          {header.subtitle}
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold leading-snug">
          {header.title}
        </h2>
        <p className="font-lora text-gray-600 text-base md:text-lg mt-4 max-w-3xl mx-auto">
          {header.description}
        </p>
      </div>

      {/* Grid Kartu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {cards.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-secondary flex items-center justify-center rounded-full mx-auto mb-6 shadow-md">
              {iconMap[item.icon]}
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
    </section>
  );
}
