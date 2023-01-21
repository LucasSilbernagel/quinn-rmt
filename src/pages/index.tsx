import { HeadFC } from 'gatsby'
import Header from '../components/Header/Header'
import AboutSection from '../components/AboutSection/AboutSection'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'
import { SEO } from '../components/Seo'
import { FaCalendarAlt } from 'react-icons/fa'

export const Head: HeadFC = () => <SEO />

const Home = () => {
  return (
    <>
      <Header isHomepage={true} />
      <main>
        <AboutSection />
        <Services />
        <Contact />
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <div className="flex justify-center my-36">
            <a
              href="https://quinnbonnettrmt.janeapp.com/#staff_member/1"
              target="_blank"
              rel="noreferrer"
              className="AppointmentButton"
            >
              <FaCalendarAlt /> Book an appointment
            </a>
          </div>
        </AnimationOnScroll>
      </main>
      <Footer />
    </>
  )
}

export default Home
