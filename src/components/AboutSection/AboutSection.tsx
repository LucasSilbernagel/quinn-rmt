import { StaticImage } from 'gatsby-plugin-image'
// import { useState } from 'react'
import './AboutSection.css'
// import SmoothCollapse from 'react-smooth-collapse'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const AboutSection = () => {
  // const [isShowingMore, setIsShowingMore] = useState(false)

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div className="AboutSection" id="about-section">
        <h3 className="SectionHeader">About</h3>
        <div className="flex gap-12 flex-col xl:flex-row">
          <div>
            <p>
              Quinn graduated with honours from International Academy of Health
              Science in 2018. He focuses on decreasing pain, improving function
              and helping you reach your movement goals. Whether they are to
              reach the next level in sports, function better at work or play
              with your kids.
            </p>
            <p>
              Quinn’s hobbies include horseback riding, wood working and
              spending time in the outdoors.
            </p>
            {/* <SmoothCollapse expanded={isShowingMore}>
              <p>More info here.</p>
              <p>More info here.</p>
              <p>More info here.</p>
            </SmoothCollapse>
            <div className="w-full flex justify-center">
              <button
                className="AppointmentButton"
                onClick={() => setIsShowingMore(!isShowingMore)}
              >
                {isShowingMore ? 'Read less' : 'Read more'}
              </button>
            </div> */}
          </div>
          <div className="PhotoContainer">
            <StaticImage
              alt="Quinn Bonnett, RMT"
              src="../../images/Quinn.jpg"
            />
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default AboutSection
