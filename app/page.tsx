import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import MedicalTeam from "./components/MedicalTeam"
import Specialties from "./components/Specialties"
import Testimonials from "./components/Testimonials"
import AppointmentForm from "./components/AppointmentForm"
import Location from "./components/Location"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MedicalTeam />
      <Specialties />
      <Testimonials />
      <AppointmentForm />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
