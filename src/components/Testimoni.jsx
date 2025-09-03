import React from "react";

export default function Testimoni() {
  const testimonials = [
    {
      name: "Maria Gunawan",
      role: "Pemilik Villa di Ubud",
      text: "Manajemen Villa sangat profesional, laporan keuangan yang transparan membuat saya merasa tenang. Semua jelas, dan hasil yang saya terima konsisten setiap bulan.",
     
    },
    {
      name: "Andi Saputra",
      role: "Pemilik Villa di Canggu",
      text: "Tim yang sangat proaktif! Villa saya kini selalu terisi penuh, bahkan di luar musim liburan. Strategi pemasaran yang mereka terapkan benar-benar efektif.",
    },
    {
      name: "James Lee",
      role: "Pemilik Villa di Seminyak",
      text: "Perawatan properti dilakukan dengan detail. Tamu-tamu saya senang sekali. Bahkan banyak yang kembali lagi! Saya sangat merekomendasikan layanan ini.",
      
    },
    {
      name: "Siti Rahayu",
      role: "Pemilik Properti di Nusa Dua",
      text: "Layanan housekeeping-nya luar biasa. Villa selalu bersih dan siap menyambut tamu. Saya tidak perlu khawatir lagi tentang kebersihan.",
     
    },
    {
      name: "John C.",
      role: "Investor Asing",
      text: "Investasi villa saya di Bali kini lebih menguntungkan berkat manajemen mereka. Tim yang sangat dapat diandalkan dan profesional.",
      
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24">
      {/* Background Gambar + Blur + Overlay */}
      <div
      className="absolute inset-0 bg-center bg-cover [filter:blur(2px)]"
      style={{
        backgroundImage: "url('/villa/poedja/villa2.jpg')",
      }}
    ></div>

      <div className="absolute inset-0 bg-black/30"></div>

      {/* Konten */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="font-raleway text-lg font-semibold text-gray-200 mb-2">
            Testimonials
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-snug">
            Dipercaya Pemilik Villa, <br />
            Dibuktikan dengan Hasil Nyata
          </h2>
          <p className="font-lora text-gray-200 text-base md:text-lg mt-4 max-w-3xl mx-auto">
            Pengalaman klien yang telah mempercayakan properti kepada kami menjadi
            bukti nyata kualitas layanan yang konsisten.
          </p>
        </div>

        {/* Grid Testimoni */}
        <div className="max-w-7xl mx-auto">
          {/* Baris Atas: 3 Testimoni */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {testimonials.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="bg-white/90 rounded-xl shadow-lg p-8 text-center h-full flex flex-col justify-center backdrop-blur-sm"
              >
                <h3 className="font-raleway text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="font-lora text-sm text-gray-500 mb-4">{item.role}</p>
                <p className="font-lora text-gray-700 italic leading-relaxed">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Baris Bawah: 2 Testimoni */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {testimonials.slice(3, 5).map((item, index) => (
                <div
                  key={index}
                  className="bg-white/90 rounded-xl shadow-lg p-8 text-center h-full flex flex-col justify-center backdrop-blur-sm"
                >
                  <h3 className="font-raleway text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="font-lora text-sm text-gray-500 mb-4">
                    {item.role}
                  </p>
                  <p className="font-lora text-gray-700 italic leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
