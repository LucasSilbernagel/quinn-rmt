import AboutSection from '../components/AboutSection/AboutSection'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'
import { FaCalendarAlt } from 'react-icons/fa'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'

const Home = () => {
  const data = useStaticQuery(graphql`
    query NavBarQuery {
      sanityHomepage {
        bookingLink
      }
    }
  `)

  return (
    <Layout
      pageTitle="Registered Massage Therapist"
      pageRoute="/"
      isHomePage={true}
    >
      <AboutSection />
      <Services />
      <Contact />
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <div className="flex justify-center my-36">
          <a
            href={data.sanityHomepage.bookingLink}
            target="_blank"
            rel="noreferrer"
            className="AppointmentButton"
          >
            <FaCalendarAlt /> Book an appointment
          </a>
        </div>
      </AnimationOnScroll>
    </Layout>
  )
}

export default Home
