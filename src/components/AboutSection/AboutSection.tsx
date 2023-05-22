import { StaticImage } from 'gatsby-plugin-image'
import './AboutSection.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const AboutSection = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div
        className="AboutSection"
        id="about-section"
        data-testid="about-section"
      >
        <h3 className="SectionHeader">About</h3>
        <div className="flex gap-12 flex-col xl:flex-row">
          <div>
            <p>
              I graduated with honours from International Academy of Health
              Science in 2018. I started working at Agility Physio clinic in
              Ottawa after my graduation. My approach while working with you is
              to understand your current goals and find strategies to help you
              reach them. I do this through a focused and straight forward
              approach regarding treatment and homecare. Whether your goal is to
              reach a new level of performance or to feel comfortable in the
              activities of daily life, I will help you get there.
            </p>
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
