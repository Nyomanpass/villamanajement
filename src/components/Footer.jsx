import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const cta = t("footer.cta", { returnObjects: true });
  const mainLinks = t("footer.links.main.items", { returnObjects: true });
  const mainTitle = t("footer.links.main.title");
  const packageLinks = t("footer.links.packages.items", { returnObjects: true });
  const packageTitle = t("footer.links.packages.title");
  const contact = t("footer.contact", { returnObjects: true });
  const copyright = t("footer.copyright");

  return (
    <>
      {/* ================= Bagian CTA Interaktif ================= */}
      <section
        className="relative py-20 px-6 md:px-11 lg:px-14 xl:px-28 bg-cover bg-center"
        style={{ backgroundImage: "url('/villa/umami/villamanajementdua.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay Gelap */}

        <div className="relative z-10 text-center">
          <h3 className="font-playfair text-3xl md:text-5xl font-bold text-white leading-snug mb-4 drop-shadow-lg">
            {cta.title}
          </h3>
          <p className="font-lora text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            {cta.description}
          </p>
          <a
            href="#"
            className="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-secondary transition-colors duration-300 transform hover:scale-105 inline-block"
          >
            {cta.button}
          </a>
        </div>
      </section>

      <footer className="bg-brown px-6 md:px-11 lg:px-14 xl:px-24 text-white py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Kolom 1: Brand + Sosmed */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={"/logodua.png"}
                alt="Logo"
                className="h-10 md:h-12 transition-all duration-300"
              />
            </div>
            <p className="font-lora text-sm text-slate-300 mb-4">
              {t("footer.deskripsi")}
            </p>
            <div className="flex space-x-4 text-xl text-white">
              <a href="#" className="hover:text-primary"><FaInstagram /></a>
              <a href="https://wa.me/6281575112801?text=Hello%2C%20I%20am%20interested%20in%20your%20villa%20management%20services." className="hover:text-primary"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Kolom 2: Link Utama */}
          <div>
            <h3 className="font-raleway font-semibold text-white mb-3">{mainTitle}</h3>
            <ul className="font-lora space-y-2 text-slate-300">
              {mainLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="hover:text-primary transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Layanan Kami */}
          <div>
            <h3 className="font-raleway font-semibold text-white mb-3">{packageTitle}</h3>
            <ul className="font-lora space-y-2 text-slate-300">
              {packageLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="hover:text-primary transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Hubungi Kami */}
          <div>
            <h3 className="font-raleway font-semibold text-white mb-3">{contact.title}</h3>
            <div className="font-lora text-slate-300 space-y-2">
              <div className="flex items-center space-x-2">
                <MdPhone />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdEmail />
                <span>Managementbyda28@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdLocationOn />
                <span>Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali 80361</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white mt-10 pt-6 text-center text-sm text-white">
          {copyright}
        </div>
      </footer>
    </>
  );
}
