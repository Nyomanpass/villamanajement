import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import PageServices from "./pages/Layanan"
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <>
          <a href="https://wa.me/6281575112801?text=Hello%2C%20I%20am%20interested%20in%20your%20villa%20management%20services." target="_blank"
              className="fixed bottom-7 right-4 md:bottom-10 md:right-10 z-50 animate-bounce">
            <div className="flex gap-2 items-center">
                <p className="bg-white text-gray-800 shadow-md px-4 py-2 rounded-xl font-semibold">{t("app")}</p>
                <img src="/logowa.png" alt="WhatsApp Icon" className="w-12 md:w-14"/>
            </div>
        </a>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-page" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/layanan" element={<PageServices/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
