import './Experience.css'
import { EXPERIENCE } from '../../content/experience'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Experience = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div className="Experience" id="experience-section">
        <h3 className="SectionHeader">Experience</h3>
        <div className="Timeline">
          <div className="Timeline__container">
            <div className="Timeline__Vertical-Line"></div>
            <ol>
              {EXPERIENCE.map((experience, index) => {
                return (
                  <li key={`${experience.website}-${index}`} className="mb-5">
                    <div className="flex items-start pt-8">
                      <div className="Timeline__circle">
                        <div className="Timeline__Horizontal-Line--right"></div>
                        <div className="Timeline__Horizontal-Line--left"></div>
                        <div className="Timeline__time--desktop">
                          <span aria-hidden="true">{experience.timeframe}</span>
                          <span className="sr-only">
                            {experience.timeframeLong}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 ml-4">
                        <div className="w-full px-6 pb-4 -mt-1">
                          <div className="Timeline__time--mobile">
                            <span aria-hidden="true">
                              {experience.timeframe}
                            </span>
                            <span className="sr-only">
                              {experience.timeframeLong}
                            </span>
                          </div>
                          <h4 className="mb-3 text-2xl text-accent-1">
                            {experience.title}
                          </h4>
                          <h5 className="pb-3 text-xl font-bold text-accent-2 hover:text-accent-1 focus:text-accent-1 duration-300 max-w-min sm:max-w-max">
                            <a
                              href={experience.website}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center"
                            >
                              {experience.company}{' '}
                              <FaExternalLinkAlt className="ml-2 text-xs hidden md:flex" />
                            </a>
                          </h5>
                          <ul>
                            {experience.accomplishments.map(
                              (accomplishment, index) => {
                                return (
                                  <li
                                    className="Timeline__accomplishment"
                                    key={index}
                                  >
                                    {accomplishment}
                                  </li>
                                )
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Experience
