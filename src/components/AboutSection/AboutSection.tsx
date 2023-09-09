import { GatsbyImage } from 'gatsby-plugin-image'
import './AboutSection.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { graphql, useStaticQuery } from 'gatsby'

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query AboutSectionQuery {
      sanityHomepage {
        about {
          _rawChildren(resolveReferences: { maxDepth: 10 })
        }
        profilePhoto {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  `)

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
            <p>{data.sanityHomepage.about[0]._rawChildren[0].text}</p>
          </div>
          <div className="PhotoContainer">
            <GatsbyImage
              alt="Quinn Bonnett, RMT"
              image={data.sanityHomepage.profilePhoto.asset.gatsbyImageData}
            />
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default AboutSection
