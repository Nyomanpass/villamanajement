import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import AboutUsSection from "../components/AboutSections"
import WhyChooseUs from "../components/WhyChooseUs"
import Footer from "../components/Footer"
import FaqSection from "../components/FaqSection"
import Package from "../components/package"
import Ota from "../components/Ota"
import HowWeWork from "../components/HowWeWork"

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Package />
            <Ota />
            <Services />
            <HowWeWork/>
            <AboutUsSection />
            <WhyChooseUs />
            <FaqSection />
            <Footer />
        </>
    )
}

export default Home