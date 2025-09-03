import React from "react";
import { FaBullhorn, FaChartLine, FaGlobe, FaComments, FaUsers, FaTools, FaClipboardList } from "react-icons/fa";

export default function HowWeWork() {
  return (
    <section className="w-full bg-white text-white py-20 px-6">
      {/* Judul + Subjudul */}
     <div className="text-center">
             <h3 className="font-raleway text-lg font-semibold text-gray-500 mb-2">
              Cara Kami Bekerja
            </h3>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-snug">
                 Memberikan Layanan Manajemen Vila Terbaik
            </h2>
        </div>

      <div className="space-y-6 px-6 md:px-12 lg:px-24 py-10">
        {/* Baris 1 - 4 item */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            icon={<FaBullhorn size={28} />}
            title="Strategi Pemasaran"
            desc="Kami ciptakan foto dan video profesional, deskripsi ramah mesin pencari, serta branding villa yang kuat agar properti Anda lebih menonjol."
          />
          <Card
            icon={<FaChartLine size={28} />}
            title="Riset Pasar & Keuangan"
            desc="Perencanaan berbasis data membantu memprediksi pendapatan secara realistis sehingga Anda bisa memperkirakan keuntungan investasi."
          />
          <Card
            icon={<FaGlobe size={28} />}
            title="Jangkauan Internasional"
            desc="Properti didistribusikan ke berbagai platform populer, media sosial, dan jaringan agen wisata terpercaya di seluruh dunia."
          />
          <Card
            icon={<FaComments size={28} />}
            title="Layanan Tamu 24/7"
            desc="Reservasi, pertanyaan, maupun kebutuhan tamu ditangani secara cepat oleh tim yang selalu siap setiap saat."
          />
        </div>

        {/* Baris 2 - 3 item */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={<FaUsers size={28} />}
            title="Pelayanan Terbaik"
            desc="Tim kebersihan dan staf tamu kami memberikan pengalaman menginap yang nyaman dan berkelas, layaknya hotel butik."
          />
          <Card
            icon={<FaTools size={28} />}
            title="Pemeliharaan Rutin"
            desc="Kami memiliki tim teknisi internal yang siap melakukan perbaikan mendesak, perawatan rutin, hingga renovasi besar."
          />
          <Card
            icon={<FaClipboardList size={28} />}
            title="Dashboard Pemilik"
            desc="Pantau langsung kinerja properti, laporan pemeliharaan, jadwal penyewaan, hingga pembayaran melalui aplikasi khusus pemilik."
          />
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
