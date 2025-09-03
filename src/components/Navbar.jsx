import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false); // untuk dropdown bahasa desktop
  const { t, i18n } = useTranslation();

  const navItems = [
    { key: "navbar.home", path: "/" },
    { key: "navbar.about", path: "/about-page" },
    { key: "navbar.services", path: "/layanan" },
    { key: "navbar.gallery", path: "/gallery" },
    { key: "navbar.contact", path: "/contact" },
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  const navClass = isScrolled
    ? "bg-white text-secondary shadow-lg"
    : "text-white";

  return (
    <>
      <nav
        className={`w-full z-50 fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-11 lg:px-14 xl:px-28 py-4 lg:py-5 ${navClass} transition-colors duration-300`}
      >
        <Link to="/">
          <img
            src={isScrolled ? "/logosatu.png" : "/logodua.png"}
            alt="Logo"
            className="h-10 md:h-12 transition-all duration-300"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl md:hidden transition-colors duration-300"
          onClick={handleToggle}
        >
          <Menu
            size={28}
            className={isScrolled ? "text-secondary" : "text-white"}
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-raleway font-medium md:text-md items-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`group relative w-max transition-colors duration-300 ${
                isScrolled ? "text-secondary" : "text-white"
              }`}
            >
              <span>{t(item.key)}</span>
              <span
                className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6  ${
                  isScrolled ? "bg-secondary" : "bg-primary"
                }`}
              ></span>
              <span
                className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 ${
                  isScrolled ? "bg-secondary" : "bg-primary"
                }`}
              ></span>
            </Link>
          ))}

          {/* Language Dropdown (Desktop) */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-800 shadow-sm hover:shadow-lg hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 font-medium"
            >
              {/* Icon bendera (opsional bisa ganti flag image) */}
              {i18n.language === "en" ? "🇺🇸 English" : "🇮🇩 Indonesia"}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-white border rounded shadow-md z-50">
                <button
                  onClick={() => changeLang("en")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-secondary"
                >
                  English
                </button>
                <button
                  onClick={() => changeLang("id")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-secondary"
                >
                  Indonesia
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Overlay & Mobile Navigation */}
      {isOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 animate-fadeIn"
            onClick={handleToggle}
          ></div>

          <div
            className={`fixed top-0 right-0 w-[80%] max-w-xs h-full bg-secondary text-white px-6 pt-4 z-50 transition-transform duration-500 transform ${
              isOpen
                ? "translate-x-0 animate-slideIn"
                : "translate-x-full animate-slideOut"
            }`}
          >
            <div className="flex justify-end">
              <button className="text-3xl" onClick={handleToggle}>
                <X className="text-white" size={28} />
              </button>
            </div>

            <div className="flex flex-col mt-8 gap-6 text-lg font-semibold">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={handleToggle}
                  className="cursor-pointer hover:text-white transition-colors duration-300"
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>

            {/* Language Dropdown (Mobile) */}
            <div className="mt-10 relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-800 shadow-sm hover:shadow-lg hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 font-medium"
            >
              {/* Icon bendera (opsional bisa ganti flag image) */}
              {i18n.language === "en" ? "🇺🇸 English" : "🇮🇩 Indonesia"}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

              {langOpen && (
                <div className="absolute right-0 mt-1 w-full bg-white border rounded shadow-md z-50">
                  <button
                    onClick={() => changeLang("en")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-secondary"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLang("id")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-secondary"
                  >
                    Indonesia
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
