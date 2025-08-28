import React from "react";

export default function Testimoni() {
  const testimonials = [
    {
      name: "Maria Gunawan",
      role: "Pemilik Villa di Ubud",
      text: "Manajemen Villa sangat profesional, laporan keuangan yang transparan membuat saya merasa tenang. Semua jelas, dan hasil yang saya terima konsisten setiap bulan.",
      avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f52a5?q=80&w=2942&auto=format&fit=crop",
    },
    {
      name: "Andi Saputra",
      role: "Pemilik Villa di Canggu",
      text: "Tim yang sangat proaktif! Villa saya kini selalu terisi penuh, bahkan di luar musim liburan. Strategi pemasaran yang mereka terapkan benar-benar efektif.",
      avatar: "https://images.unsplash.com/photo-1521572178393-e69d8d64104c?q=80&w=2942&auto=format&fit=crop",
    },
    {
      name: "James Lee",
      role: "Pemilik Villa di Seminyak",
      text: "Perawatan properti dilakukan dengan detail. Tamu-tamu saya senang sekali. Bahkan banyak yang kembali lagi! Saya sangat merekomendasikan layanan ini.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a8117dc7b45?q=80&w=2894&auto=format&fit=crop",
    },
    {
      name: "Siti Rahayu",
      role: "Pemilik Properti di Nusa Dua",
      text: "Layanan housekeeping-nya luar biasa. Villa selalu bersih dan siap menyambut tamu. Saya tidak perlu khawatir lagi tentang kebersihan.",
      avatar: "https://images.unsplash.com/photo-1573497019236-17a419e68146?q=80&w=2874&auto=format&fit=crop",
    },
    {
      name: "John C.",
      role: "Investor Asing",
      text: "Investasi villa saya di Bali kini lebih menguntungkan berkat manajemen mereka. Tim yang sangat dapat diandalkan dan profesional.",
      avatar: "https://images.unsplash.com/photo-1629467054366-a3674686419d?q=80&w=2942&auto=format&fit=crop",
    },
  ];

  return (
<>
        <section className="w-full bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <p className="font-raleway text-lg font-semibold text-gray-500 mb-2">
          Testimonials
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold leading-snug">
          Dipercaya Pemilik Villa, <br />
          Dibuktikan dengan Hasil Nyata
        </h2>
        <p className="font-lora text-gray-600 text-base md:text-lg mt-4 max-w-3xl mx-auto">
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
              className="bg-white rounded-xl shadow-lg p-8 text-center h-full flex flex-col justify-center transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                <img src={item.avatar} alt={`Avatar ${item.name}`} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-raleway text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="font-lora text-sm text-gray-500 mb-4">{item.role}</p>
              <p className="font-lora text-gray-600 italic leading-relaxed">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Baris Bawah: 2 Testimoni (dibuat terpusat) */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {testimonials.slice(3, 5).map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 text-center h-full flex flex-col justify-center transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                  <img src={item.avatar} alt={`Avatar ${item.name}`} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-raleway text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="font-lora text-sm text-gray-500 mb-4">{item.role}</p>
                <p className="font-lora text-gray-600 italic leading-relaxed">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
</>
  );
}