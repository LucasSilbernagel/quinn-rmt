import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'
import './AboutSection.css'
import SmoothCollapse from 'react-smooth-collapse'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const AboutSection = () => {
  const [isShowingMore, setIsShowingMore] = useState(false)

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div className="AboutSection" id="about-section">
        <h3 className="SectionHeader">About Me</h3>
        <div className="flex gap-12 flex-col xl:flex-row">
          <div>
            <p>
              Hi, I&apos;m Lucas! I&apos;m a front-end developer based in
              Toronto, Canada. I specialize in transforming designs, prototypes,
              and ideas into delightful user interfaces.
            </p>
            <p>
              I&apos;ve been working in the industry since 2020, when I
              graduated from web development bootcamp at Juno College. The
              logical side of my brain loves solving tricky coding problems and
              software architecture challenges, while the creative side of my
              brain loves converting designs into beautiful and functional web
              pages that people use every day. I&apos;m also passionate about
              making the web a more accessible place, one page at a time.
            </p>
            <SmoothCollapse expanded={isShowingMore}>
              <p>
                In university I studied anthropology and French. I planned to
                work in academia, but after completing a Master&apos;s degree in
                anthropology I realized that this was not a viable option due to
                the overly competitive job market and the increasing trend of
                hiring contract faculty instead of full-time positions. I worked
                briefly in a sales role at a tech company, and then for over
                three years in a customer service role at a call center.
              </p>
              <p>
                While working at the call center, I enrolled in a part-time
                introduction to web development course at Juno College in
                October 2019. I had dabbled in building websites in the past,
                and I wanted to see if a career change into web development was
                the right move for me. I really enjoyed the course, so after
                much deliberation I quit my job to begin full-time bootcamp in
                February 2020.
              </p>
              <p>
                Finding a job after bootcamp was challenging, since I graduated
                shortly after the start of the COVID-19 pandemic. However,
                within two months I managed to land my first position as a
                front-end developer, and I&apos;ve been working in the industry
                ever since!
              </p>
            </SmoothCollapse>
            <div className="w-full flex justify-center">
              <button
                className="AccentButton"
                onClick={() => setIsShowingMore(!isShowingMore)}
              >
                {isShowingMore ? 'Read less' : 'Read more'}
              </button>
            </div>
          </div>
          <div className="PhotoContainer">
            <StaticImage
              alt="Lucas Silbernagel"
              src="../../images/profile-photo.jpg"
            />
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default AboutSection
