import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-page" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = isScrolled 
    ? "bg-white text-secondary shadow-lg" 
    : "text-white";

  return (
    <>
      <nav className={`w-full z-50 fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-11 lg:px-14 xl:px-28 py-4 lg:py-5 ${navClass} transition-colors duration-300`}>
        <Link to="/">
           <img 
            src={isScrolled ? "/logosatu.png" : "/logodua.png"} 
            alt="Logo" 
            className="h-10 md:h-12 transition-all duration-300" 
          />
        </Link>

        {/* Mobile Menu Button */}
        <button className="text-2xl md:hidden transition-colors duration-300" onClick={handleToggle}>
          <Menu size={28} className={isScrolled ? "text-primary" : "text-white"} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-raleway font-medium md:text-md">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`group relative w-max transition-colors duration-300 ${isScrolled ? "text-secondary" : "text-white"}`}
            >
              <span>{item.name}</span>
              <span className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6  ${isScrolled ? "bg-secondary" : "bg-primary"}`}></span>
              <span className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 ${isScrolled ? "bg-secondary" : "bg-primary"}`}></span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Overlay dan Mobile Navigation */}
      {isOpen && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 animate-fadeIn" onClick={handleToggle}></div>

          <div className={`fixed top-0 right-0 w-[80%] max-w-xs h-full bg-secondary text-primary px-6 pt-4 z-50 transition-transform duration-500 transform ${isOpen ? "translate-x-0 animate-slideIn" : "translate-x-full animate-slideOut"}`}>
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
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <p className="font-semibold">Address</p>
              <p>Jl. Raya Gentong, Tegallalang, Ubud</p>
              <p className="font-semibold mt-4">Open Time</p>
              <p>Monday - Friday: 10.00 - 17.00</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;