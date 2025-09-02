import React from "react";
import { useState } from 'react';
import { FaXmark } from "react-icons/fa6";

export const Package = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [selectedPackage, setSelectedPackage] = useState(null);
      const [message, setMessage] = useState("");

      const handlePopup = () => {
            setIsOpen(!isOpen);
            //dont let the user scrolling window
            if (!isOpen) {
                  document.body.style.overflow = "hidden";
            } else {
                  document.body.style.overflow = "auto";
            }
      };

      const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            message: ''
      });

      const handleSelectedPackage = (packageType) => {
            setSelectedPackage(packageType);
            setIsOpen(true);
            document.body.style.overflow = "hidden";

            // Set default message based on package type and update formData
            let defaultMessage = "";
            if (packageType === "Full Management") {
                  defaultMessage = "Hello I'm interested in your Full Management service package";
            } else if (packageType === "Online Marketing") {
                  defaultMessage = "Hello I'm interested in your Online marketing service package";
            }

            setMessage(defaultMessage);
            setFormData(prev => ({
                  ...prev,
                  message: defaultMessage
            }));
      };

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                  ...prev,
                  [name]: value
            }));
      };

      const handleSubmit = (e) => {
            e.preventDefault();

            // Check if all fields are filled
            if (!formData.name || !formData.email || !formData.phone || !formData.message) {
                  alert('Mohon lengkapi semua field yang diperlukan');
                  return;
            }

            // Format message for WhatsApp
            const whatsappMessage = encodeURIComponent(
                  `Halo, saya ingin memesan paket ${selectedPackage}\n\n` +
                  `Nama: ${formData.name}\n` +
                  `Email: ${formData.email}\n` +
                  `Nomor Telepon: ${formData.phone}\n\n` +
                  `${formData.message}`
            );

            // WhatsApp number (replace with your actual number)
            const whatsappNumber = '6288223754172'; // Replace with your WhatsApp number
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Close modal and reset form
            setIsOpen(false);
            document.body.style.overflow = "auto";
            setFormData({ name: '', email: '', phone: '', message: '' });
      };

      return (
            <>
                  <section className="py-20 px-6 md:px-11 lg:px-14 bg-gray-50 flex justify-center">
                        <div className="xl:w-[80%] bg-white py-10 lg:py-18 rounded-xl shadow-lg">
                              <div className="text-center mb-12 border-b-2 border-gray-200 pb-14 w-[80%] mx-auto">
                                    <h3 className="font-raleway text-lg font-semibold text-gray-500 mb-2">
                                          Our Package
                                    </h3>
                                    <h2 className="font-playfair text-3xl md:text-4xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold leading-snug">
                                          Paket Layanan yang Sesuai Kebutuhan Anda
                                    </h2>
                                    <p className="font-lora text-gray-600 mt-4 max-w-2xl mx-auto">
                                          Temukan paket yang paling tepat untuk mendukung villa Anda, apakah membutuhkan pengelolaan menyeluruh atau fokus pada pemasaran online yang efektif.
                                    </p>

                              </div>

                              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                    <div className="lg:w-[40%] px-7 py-8 xl:py-8 xl:px-10 lg:min-h-56 xl:min-h-72 rounded-lg flex flex-col justify-between hover:shadow-lg transition-all">
                                          <div>
                                                <h4 className="font-playfair text-xl font-semibold mb-3 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-snug">Full Management</h4>
                                                <p className="font-lora text-gray-600">
                                                      Apakah Anda lelah mengurus villa sendirian? Dengan paket ini, operasional, perawatan, keuangan, dan pemasaran ditangani profesional sehingga Anda bebas menikmati hasil.
                                                </p>
                                          </div>
                                          <button
                                                onClick={() => handleSelectedPackage("Full Management")}
                                                className="mt-8 w-full px-6 py-3 bg-secondary text-white font-semibold rounded-full shadow-lg hover:bg-primary duration-300 transform inline-block mx-auto lg:mx-0 transition-all">
                                                Pilih Paket Ini
                                          </button>
                                    </div>
                                    <div className="lg:w-[40%] px-7 py-8 xl:py-8 xl:px-10 lg:min-h-56 xl:min-h-72 rounded-lg flex flex-col justify-between hover:shadow-lg transition-all">
                                          <div>
                                                <h4 className="font-raleway text-xl mb-3 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold leading-snug">Online Marketing</h4>
                                                <p className="font-lora text-gray-600">
                                                      Sulit meningkatkan reservasi meski operasional sudah rapi? Paket ini fokus pada pemasaran digital, optimasi listing, dan promosi online agar villa Anda lebih dikenal.
                                                </p>
                                          </div>
                                          <button
                                                onClick={() => handleSelectedPackage("Online Marketing")}
                                                className="mt-8 w-full px-6 py-3 bg-transparent border-2 border-secondary text-secondary font-semibold rounded-full shadow-lg hover:bg-secondary hover:text-white duration-300 transform inline-block mx-auto lg:mx-0 transition-all">
                                                Pilih Paket Ini
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* Modal */}
                  {isOpen && (
                        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
                              <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
                                    <div className="flex justify-between items-center mb-6">
                                          <h3 className="text-xl font-semibold ">Form Pemesanan Paket</h3>
                                          <button
                                                type="button"
                                                onClick={handlePopup}
                                                className="text-gray-600 hover:text-gray-900"
                                          >
                                                <FaXmark className="text-xl" />
                                          </button>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                          <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                      Nama <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                      type="text"
                                                      name="name"
                                                      value={formData.name}
                                                      onChange={handleInputChange}
                                                      required
                                                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                      placeholder="Masukkan nama Anda"
                                                />
                                          </div>
                                          <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                      Email <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                      type="email"
                                                      name="email"
                                                      value={formData.email}
                                                      onChange={handleInputChange}
                                                      required
                                                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                      placeholder="Masukkan email Anda"
                                                />
                                          </div>
                                          <div className="mb-6">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                      Nomor Telepon <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                      type="tel"
                                                      name="phone"
                                                      value={formData.phone}
                                                      onChange={handleInputChange}
                                                      required
                                                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                      placeholder="Masukkan nomor telepon"
                                                />
                                          </div>
                                          <div className="mb-6">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                      Pesan <span className="text-red-500">*</span>
                                                </label>
                                                <textarea
                                                      name="message"
                                                      value={formData.message}
                                                      rows={4}
                                                      onChange={handleInputChange}
                                                      required
                                                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                                      placeholder="Masukkan pesan Anda"
                                                />
                                          </div>

                                          <div className="flex gap-3">
                                                <button
                                                      type="submit"
                                                      className="flex-1 bg-secondary text-white py-2 px-4 rounded-md hover:bg-primary transition-colors"
                                                >
                                                      Kirim ke WhatsApp
                                                </button>

                                          </div>
                                    </form>
                              </div>
                        </div>
                  )}

            </>
      );
};

export default Package;