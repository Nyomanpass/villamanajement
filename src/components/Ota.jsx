import React from "react";

const Ota = () => {
  const logos = [
    { src: "/Tiket.com.png", alt: "Tiket.com" },
    { src: "/traveloka.png", alt: "Traveloka" },
    { src: "/booking.png", alt: "Booking.com" },
    { src: "/logo1.jpeg", alt: "trip.com" },
    { src: "/logo3.png", alt: "expedia" },
    { src: "/staah.jpg", alt: "staah" },
    { src: "/logo2.png", alt: "agoda" },
    
  ];

  return (
    <section className="pb-10 px-6 md:px-11 lg:px-14 mt-10">
      <div className="w-full overflow-x-auto scroll-smooth pb-4">
        <div className="flex gap-6 justify-start">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-60 h-28 flex items-center justify-center bg-white rounded-lg"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-16 grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ota;
