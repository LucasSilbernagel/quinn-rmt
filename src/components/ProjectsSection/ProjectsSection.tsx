import { GatsbyImage } from 'gatsby-plugin-image'
import { PROJECTS } from '../../content/projects'
import './ProjectsSection.css'
import { graphql, useStaticQuery } from 'gatsby'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ProjectsSection = () => {
  const projectImageNames = PROJECTS.map((project) => project.imageFileName)

  const imageQuery = useStaticQuery(query)

  const projectImages = imageQuery.allImageSharp.nodes
    .filter((node: { original: { src: string } }) =>
      projectImageNames.includes(node.original.src.split('/')[2].split('-')[0])
    )
    .map((node: { gatsbyImageData: string; original: { src: string } }) => {
      return {
        gatsbyImageData: node.gatsbyImageData,
        imageName: node.original.src.split('/')[2].split('-')[0],
      }
    })

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div className="ProjectsSection" id="projects-section">
        <h3 className="SectionHeader">Projects</h3>
        <ul>
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0
            return (
              <li key={`${project.github}`}>
                {/* Desktop */}
                <div className="Project--desktop">
                  <div className={isEven ? '' : 'absolute right-0'}>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`live link for ${project.name}`}
                      className="ImageLink"
                    >
                      <GatsbyImage
                        image={
                          projectImages.filter(
                            (projectImage: { imageName: string }) =>
                              projectImage.imageName === project.imageFileName
                          )[0].gatsbyImageData
                        }
                        alt=""
                        className="w-full h-full object-contain rounded-sm"
                      />
                      <div className="Overlay--desktop"></div>
                      <div className="Overlay2--desktop"></div>
                    </a>
                  </div>
                  <div
                    className={`ProjectText ${
                      isEven ? '-right-10 text-right' : '-left-10 text-left'
                    }`}
                  >
                    <h4 className="ProjectName">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`live link for ${project.name}`}
                      >
                        {project.name}
                      </a>
                    </h4>
                    <div className="ProjectDescription">
                      <p>{project.description}</p>
                    </div>
                    <div className="text-accent-2 text-sm font-fira-code mt-6">
                      <ul
                        className={`flex flex-wrap gap-x-4 gap-y-2 ${
                          isEven ? 'justify-end pl-32' : 'justify-start pr-32'
                        }`}
                      >
                        {project.techStack.map((skill, skillIndex) => {
                          return (
                            <li
                              key={`${project.github}-${skill.replace(
                                / /g,
                                ''
                              )}-${skillIndex}-desktop`}
                            >
                              {skill}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <div
                      className={`flex gap-6 mt-6 text-lg ${
                        isEven ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub repository for ${project.name}`}
                          className="IconLink"
                        >
                          <FaGithub />
                        </a>
                      </div>
                      <div>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`live link for ${project.name}`}
                          className="IconLink"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Mobile */}
                <div className="Project--mobile">
                  <GatsbyImage
                    className="rounded-sm absolute w-full h-full opacity-50"
                    alt=""
                    image={
                      projectImages.filter(
                        (projectImage: { imageName: string }) =>
                          projectImage.imageName === project.imageFileName
                      )[0].gatsbyImageData
                    }
                  />
                  <div className="Overlay--mobile"></div>
                  <div className="Overlay2--mobile"></div>
                  <div className="z-20 px-6 py-8 rounded-sm">
                    <h4 className="ProjectName">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`live link for ${project.name}`}
                      >
                        {project.name}
                      </a>
                    </h4>
                    <div className=" text-sm text-accent-2 tracking-wide my-6">
                      <p>{project.description}</p>
                    </div>
                    <div className="text-accent-2 text-sm font-fira-code mb-6">
                      <ul className="flex flex-wrap gap-x-4 gap-y-2">
                        {project.techStack.map((skill, skillIndex) => {
                          return (
                            <li
                              key={`${project.github}-${skill.replace(
                                / /g,
                                ''
                              )}-${skillIndex}-mobile`}
                            >
                              {skill}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <div className="flex gap-12 text-lg">
                      <div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub repository for ${project.name}`}
                          className="IconLink"
                        >
                          <FaGithub />
                        </a>
                      </div>
                      <div>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`live link for ${project.name}`}
                          className="IconLink"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </AnimationOnScroll>
  )
}

export const query = graphql`
  query Images {
    allImageSharp {
      nodes {
        gatsbyImageData
        original {
          src
        }
      }
    }
  }
`

export default ProjectsSection
