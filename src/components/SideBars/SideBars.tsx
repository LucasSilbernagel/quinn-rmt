import './SideBars.css'
import SocialLinks from '../SocialLinks/SocialLinks'

const SideBars = () => {
  return (
    <>
      <div className="SocialLinks">
        <SocialLinks />
      </div>
      <div className="Email">
        <a
          className="AccentFont"
          href="mailto:hello@lucassilbernagel.com"
          target="_blank"
          rel="noreferrer"
        >
          hello@lucassilbernagel.com
        </a>
      </div>
    </>
  )
}

export default SideBars
