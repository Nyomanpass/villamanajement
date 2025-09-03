import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FaqSection from "../components/FaqSection";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="h-[40vh] relative">
        <img src="/villa/umami/villamanajementsatu.jpg" alt="Hero Image" className="absolute left-0 w-full h-full object-cover z-[-2]" />
        {/* Overlay Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[-1]"></div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center h-full mx-6 md:mx-12 lg:mx-16 xl:mx-28 pt-12 z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white">
              Contact Us
            </h2>
            <p className="text-white max-w-2xl mx-auto mt-3">
              Jelajahi keindahan dan kemewahan villa kami melalui koleksi foto yan
              menakjubkan dari setiap sudut properti yang istimewa ini.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg">
            <h2 className="font-playfair font-semibold text-3xl mb-2 text-gray-800">
              Kirimkan Pesan
            </h2>
            <p className="text-gray-500 mb-8">
              Kami akan segera menghubungi Anda kembali.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                />
                <input
                  type="text"
                  placeholder="No. Telepon"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                />
                <input
                  type="text"
                  placeholder="Subjek"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Pesan Anda"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-primary text-white font-semibold py-4 rounded-lg transition-colors duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="font-playfair font-semibold text-3xl mb-2 text-gray-800">
                Hubungi Kami
              </h2>
              <p className="text-gray-500 mb-8">
                Kami siap membantu Anda kapan saja.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-primary text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Alamat</h4>
                  <p className="text-gray-600">Jl. Wisata Paradise No.123, Ubud, Bali 80571</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-primary text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Telepon</h4>
                  <p className="text-gray-600">+62 361 765 489</p>
                  <p className="text-gray-600">+62 852 564 291</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-primary text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">info@villabali.com</p>
                  <p className="text-gray-600">booking@villabali.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaClock className="text-primary text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Jam Operasional</h4>
                  <p className="text-gray-600">Senin – Jumat</p>
                  <p className="text-gray-600">08.00 – 17.00 WITA</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
      <FaqSection/>
      <Footer />
    </>
  );
};

export default Contact;