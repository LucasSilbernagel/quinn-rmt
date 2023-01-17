import { FaCopyright } from 'react-icons/fa'
import SocialLinks from '../SocialLinks/SocialLinks'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="mt-12 mb-6">
      <div className="IconLinks">
        <SocialLinks />
      </div>
      <div className="TextLinks">
        <p className="mb-4 max-w-max mx-auto flex items-center">
          <FaCopyright className="mr-2 text-xs" /> Quinn Bonnett, RMT
        </p>
        <p>
          Website built by{' '}
          <a
            href="https://github.com/LucasSilbernagel/portolio-2.0"
            target="_blank"
            rel="noreferrer"
          >
            Lucas Silbernagel
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
