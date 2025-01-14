import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedCourses from './components/FeaturedCourses'
import CoachingServices from './components/CoachingServices'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedCourses />
        <CoachingServices />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

