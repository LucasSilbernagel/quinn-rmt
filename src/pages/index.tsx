import { HeadFC } from 'gatsby'
import Header from '../components/Header/Header'
import AboutSection from '../components/AboutSection/AboutSection'
import TechStack from '../components/Services/Services'
import Experience from '../components/Experience/Experience'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import Footer from '../components/Footer/Footer'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'
import { SEO } from '../components/Seo'

export const Head: HeadFC = () => <SEO />

const Home = () => {
  return (
    <>
      <Header isHomepage={true} />
      <main>
        <AboutSection />
        <TechStack />
        <Experience />
        <ProjectsSection />
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <div className="flex justify-center my-36">
            <a
              href="mailto:hello@lucassilbernagel.com"
              target="_blank"
              rel="noreferrer"
              className="AccentButton"
            >
              Say hello
            </a>
          </div>
        </AnimationOnScroll>
      </main>
      <Footer />
    </>
  )
}

export default Home
