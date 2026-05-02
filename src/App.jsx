import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import WhyUs from './components/WhyUs'
import FeaturedBox from './components/FeaturedBox'
import HowWeWork from './components/HowWeWork'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import BlogSection from './components/BlogSection'
import Location from './components/Location'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import AllTreatments from './components/AllTreatments'

function App() {
  const isTreatmentsPage = window.location.pathname === '/tratamientos'

  if (isTreatmentsPage) {
    return (
      <main className="bg-white text-black">
        <TopBar />
        <Navbar />
        <AllTreatments />
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-white text-black">
      <TopBar />

      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      <Treatments />
      <WhyUs />
      <FeaturedBox />
      <HowWeWork />
      <Testimonials />
      <Pricing />
      <BlogSection />
      <Location />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App