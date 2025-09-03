import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutUsSection() {
  const villaImages = [
    '/villa/aming/villamanajementtiga.jpg',
    '/villa/umami/villamanajementsatu.jpg',
    '/villa/merak/villamanajementempat.jpg',
    '/villa/poedja/villa10.jpg',
    '/villa/umami/villamanajementlima.jpg',
  ];

  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 text-gray-800 px-6 md:px-11 lg:px-14 xl:px-28">
      <div className="flex flex-col items-center">
        {/* Konten Teks di Atas */}
        <div className="text-center">
          <h3 className="font-raleway text-lg font-semibold text-gray-500 mb-2">
            {t('aboutUs.header.subtitle')}
          </h3>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-snug">
            {t('aboutUs.header.title')}
          </h2>
          <p className="font-lora text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
            {t('aboutUs.header.description')}
          </p>
        </div>

        
        {/* Galeri Gambar yang Dapat Digeser */}
        <div className="w-full mt-16 relative">
          <div className="w-full overflow-x-auto scroll-smooth pb-4">
            <div className="flex gap-6 justify-start">
              {villaImages.map((image, idx) => (
                <div 
                  key={idx}
                  className="flex-shrink-0 w-80 h-96 rounded-lg shadow-lg overflow-hidden group"
                >
                  <img
                    src={image}
                    alt={`Villa ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;