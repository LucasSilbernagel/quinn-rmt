import './Contact.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FaEnvelope, FaPhoneAlt, FaFacebookSquare } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      sanityHomepage {
        address {
          _rawChildren(resolveReferences: { maxDepth: 10 })
        }
        email
        phone
        map {
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
        className="Contact"
        id="contact-section"
        data-testid="contact-section"
      >
        <h3 className="SectionHeader">Contact</h3>
        <div className="flex justify-between flex-col xl:flex-row">
          <div className="max-w-max mx-auto">
            <div>
              <h4 className="font-bold text-xl">Address:</h4>
              {data.sanityHomepage.address.map(
                (line: {
                  _rawChildren: {
                    text: string
                    _key: string
                  }[]
                }) => {
                  return (
                    <p key={line._rawChildren[0]._key}>
                      {line._rawChildren[0].text}
                    </p>
                  )
                }
              )}
            </div>
            <ul className="my-8">
              <li className="flex gap-2 items-center">
                <FaEnvelope aria-label="email address" className="text-2xl" />{' '}
                <a
                  href={`mailto:${data.sanityHomepage.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="ExternalLink"
                >
                  {data.sanityHomepage.email}
                </a>
              </li>
              <li className="flex gap-2 items-center mt-8">
                <FaPhoneAlt aria-label="phone number" className="text-2xl" />{' '}
                <a
                  href={`tel:${data.sanityHomepage.phone}`}
                  className="ExternalLink"
                >
                  {data.sanityHomepage.phone}
                </a>
              </li>
              <li className="flex gap-2 items-center mt-8">
                <a
                  href="https://www.facebook.com/profile.php?id=100089508584242"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook for Quinn Bonnett, RMT"
                  className="hover:scale-110 focus:scale-110 duration-300"
                  data-testid="facebook-icon-link"
                >
                  <FaFacebookSquare className="text-2xl" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100089508584242"
                  target="_blank"
                  rel="noreferrer"
                  className="ExternalLink"
                >
                  Reach out on Facebook!
                </a>
              </li>
            </ul>
          </div>
          <div className="MapContainer">
            <GatsbyImage
              data-testid="map-image"
              alt=""
              image={data.sanityHomepage.map.asset.gatsbyImageData}
            />
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Contact
