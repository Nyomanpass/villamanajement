import { FaPlus, FaMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FaqSection = () => {
  const { t } = useTranslation();
  const header = t("faq.header", { returnObjects: true });
  const faqItems = t("faq.items", { returnObjects: true });

  const WA_PHONE = "6281575112801";
  const waUrl = (msg) => `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="px-6 max-w-7xl mx-auto">
      <h2 className="font-playfair text-center text-3xl md:text-4xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold leading-snug">
        {header.title}
      </h2>
      <p className="font-lora text-gray-600 mt-4 max-w-2xl mx-auto text-center mb-10">
        {header.description}
      </p>

      <div className="px-3 mb-28 gap-y-6">
        {faqItems.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white mb-5 p-6 rounded-lg shadow-sm border border-gray-200 cursor-pointer transition-colors duration-200 hover:bg-gray-100"
            onClick={() => window.open(waUrl(faq.msg), "_blank")}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-lora text-lg font-medium text-gray-800">
                {faq.question}
              </h4>
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
