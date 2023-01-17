import { TECH_STACK } from '../../content/skills'
import './TechStack.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const TechStack = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div className="TechStack" id="tech-stack-section">
        <h3 className="SectionHeader">Tech Stack</h3>
        <ul className="SkillGrid">
          {TECH_STACK.map((skillset) => {
            return (
              <li key={skillset.id} className="flex flex-col items-center">
                <h4 className="font-fira-code text-accent-1 text-center mb-1">
                  {skillset.section}
                </h4>
                <div className="SkillBox">
                  <ul className="text-sm">
                    {skillset.skills.map((skill, skillIndex) => (
                      <li
                        key={`${skillset.id}-${skillIndex}`}
                        className="Skill"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </AnimationOnScroll>
  )
}

export default TechStack
