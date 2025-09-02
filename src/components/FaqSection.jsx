// import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FaqSection = () => {
  // const [openIndex, setOpenIndex] = useState(null); // State untuk melacak item yang terbuka

  const WA_PHONE = "6288223754172";
  const waUrl = (msg) => `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;

  const faqItems = [
    {
      question: "Apa saja layanan yang termasuk dalam manajemen vila?",
      answer: "Kami mengurus semuanya, mulai dari pemasaran, manajemen pemesanan, verifikasi tamu, pembersihan rutin, perawatan properti, hingga laporan keuangan bulanan. Anda hanya perlu duduk santai dan menikmati keuntungannya.",
      msg: "Hello, I'd like to know which services are included in your villa management. Could you share the detailed scope and sample deliverables? Thank you."
    },
    {
      question: "Bagaimana Anda memasarkan properti saya?",
      answer: "Kami menggunakan strategi pemasaran multi-platform, termasuk listing di situs booking terkemuka seperti Airbnb dan Booking.com, serta promosi melalui media sosial dan jaringan agen perjalanan kami.",
      msg: "Hello, could you outline your marketing & reservation strategy for my villa?"
    },
    {
      question: "Berapa biaya jasa manajemen vila?",
      answer: "Kami menerapkan sistem komisi berdasarkan persentase dari pendapatan bersih properti Anda. Tidak ada biaya tersembunyi. Model ini memastikan kami bekerja keras untuk memaksimalkan pendapatan Anda.",
      msg: "Hello, could you share your management fee structure?"
    },
    {
      question: "Bagaimana cara saya memantau kinerja vila saya?",
      answer: "Kami menyediakan portal khusus untuk pemilik vila, di mana Anda dapat melihat status pemesanan, laporan pendapatan, biaya operasional, dan jadwal pemeliharaan secara transparan setiap saat.",
      msg: "Hello, what reporting and dashboard access will I get to monitor occupancy, ADR, RevPAR, expenses, and payouts? How often are reports provided?"
    },
    {
      question: "Bagaimana jika ada kerusakan atau keadaan darurat?",
      answer: "Tim kami siaga 24/7 untuk menangani semua masalah yang mungkin timbul, mulai dari perbaikan kecil hingga keadaan darurat. Kami akan menghubungi Anda untuk setiap keputusan besar terkait properti.",
      msg: "Hello, what is your SOP for maintenance issues or emergencies?"
    },
    {
      question: "Apakah Anda juga melayani vila yang masih baru?",
      answer: "Ya, kami dapat membantu menyiapkan properti baru Anda dari awal. Kami akan memberikan saran tentang penataan interior, kebutuhan perlengkapan, dan foto profesional agar properti Anda siap untuk pasar.",
      msg: "Hello, do you also manage newly built villas? What is your approach to preparing them for the rental market?"
    },
  ];

  // const handleToggle = (index) => {
  //   // Jika item yang sama diklik, tutup. Jika tidak, buka item yang baru.
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  return (
    <div className="mt-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-center font-playfair font-semibold text-3xl mb-4 text-gray-800">
        Pertanyaan yang Sering Diajukan
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Temukan jawaban untuk pertanyaan umum tentang layanan kami.
      </p>

      <div className="px-3 mb-28 gap-y-6">
        {faqItems.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white mb-5 p-6 rounded-lg shadow-sm border border-gray-200 cursor-pointer transition-colors duration-200 hover:bg-gray-100"
            onClick={() => window.open(waUrl(faq.msg), "_blank")}
          >
            <div
              className="flex justify-between items-center"

            >
              <h4 className="font-lora text-lg font-medium text-gray-800">
                {faq.question}
              </h4>
              <span>
                {/* {openIndex === idx ? (
                  <FaMinus className="text-primary" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )} */}
              </span>
            </div>
            {/* {openIndex === idx && (
              <p className="mt-4 text-sm text-gray-600 leading-relaxed animate-fadeIn">
                {faq.answer}
              </p>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;