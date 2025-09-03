import React from "react";
import { FaBullhorn, FaChartLine, FaGlobe, FaComments, FaUsers, FaTools, FaClipboardList } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function HowWeWork() {
  const { t } = useTranslation();

  const cardIcons = [
    <FaBullhorn size={28} />,
    <FaChartLine size={28} />,
    <FaGlobe size={28} />,
    <FaComments size={28} />,
    <FaUsers size={28} />,
    <FaTools size={28} />,
    <FaClipboardList size={28} />
  ];

  const cards = t("howWeWork.cards", { returnObjects: true });

  return (
    <section className="w-full bg-white text-white py-20 px-6">
      {/* Judul + Subjudul */}
      <div className="text-center">
        <h3 className="font-raleway text-lg font-semibold text-gray-500 mb-2">
          {t("howWeWork.header.subtitle")}
        </h3>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-snug">
          {t("howWeWork.header.title")}
        </h2>
      </div>

      <div className="space-y-6 px-6 md:px-12 lg:px-24 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.slice(0, 4).map((card, index) => (
            <Card key={index} icon={cardIcons[index]} title={card.title} desc={card.desc} />
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.slice(4).map((card, index) => (
            <Card key={index} icon={cardIcons[index + 4]} title={card.title} desc={card.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="bg-secondary/90 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
      <div className="text-white mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-100 text-sm">{desc}</p>
    </div>
  );
}
