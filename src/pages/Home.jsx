import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import AboutUsSection from "../components/AboutSections"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimoni from "../components/Testimoni"
import Footer from "../components/Footer"
import FaqSection from "../components/FaqSection"

function Home(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <Services/>
            <AboutUsSection/>
            <WhyChooseUs/>
            <Testimoni/>
            <FaqSection/>
            <Footer/>
        </>
    )
}

export default Home