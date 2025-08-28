import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"

function App() {
  return (
    <>
          <a href="" target="_blank"
              className="fixed bottom-7 right-4 md:bottom-10 md:right-10 z-50 animate-bounce">
            <div className="flex gap-2 items-center">
                <p className="bg-white text-gray-800 shadow-md px-4 py-2 rounded-xl font-semibold">Konsultasi Gratis</p>
                <img src="/logowa.png" alt="WhatsApp Icon" className="w-12 md:w-14"/>
            </div>
        </a>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-page" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
