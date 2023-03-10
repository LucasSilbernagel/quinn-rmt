import './Contact.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { StaticImage } from 'gatsby-plugin-image'
import { FaEnvelope, FaPhoneAlt, FaFacebookSquare } from 'react-icons/fa'

const Contact = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div className="Contact" id="contact-section">
        <h3 className="SectionHeader">Contact</h3>
        <div className="flex justify-between flex-col xl:flex-row">
          <div className="max-w-max mx-auto">
            <div>
              <h4 className="font-bold text-xl">Address:</h4>
              <p>Quinn Bonnett, RMT</p>
              <p>38 Main St E</p>
              <p>Vankleek Hill, ON</p>
              <p>K0B 1R0</p>
            </div>
            <ul className="my-8">
              <li className="flex gap-2 items-center">
                <FaEnvelope aria-label="email address" className="text-2xl" />{' '}
                <a
                  href="mailto:quinnbonnettrmt@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="ExternalLink"
                >
                  QuinnBonnettRMT@outlook.com
                </a>
              </li>
              <li className="flex gap-2 items-center mt-8">
                <FaPhoneAlt aria-label="phone number" className="text-2xl" />{' '}
                <a href="tel:514-779-4129" className="ExternalLink">
                  514-779-4129
                </a>
              </li>
              <li className="flex gap-2 items-center mt-8">
                <a
                  href="https://www.facebook.com/profile.php?id=100089508584242"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook for Quinn Bonnett, RMT"
                  className="hover:scale-110 focus:scale-110 duration-300"
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
            <StaticImage
              alt="38 Main St E, Vankleek Hill, ON, K0B 1R0"
              src="../../images/location.png"
            />
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Contact
