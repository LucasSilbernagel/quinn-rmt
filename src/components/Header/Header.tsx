import { useEffect, useState } from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import NavBar from '../NavBar/NavBar'
import './Header.css'
import scrollTo from 'gatsby-plugin-smoothscroll'

interface HeaderProps {
  isHomepage: boolean
}

const Header = ({ isHomepage }: HeaderProps) => {
  const [isMenuOpening, setIsMenuOpening] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpening) {
      /** Close menu when Escape key is pressed */
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setIsMenuOpening(false)
        }
      })
      setIsMenuOpen(true)
      /** Prevent scrolling when the menu is open. */
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', (e) => e.key === 'Escape')
      document.body.style.overflow = 'scroll'
      setTimeout(() => {
        setIsMenuOpen(false)
      }, 500)
    }
  }, [isMenuOpening])

  return (
    <header id="header">
      <NavBar
        isMenuOpening={isMenuOpening}
        setIsMenuOpening={setIsMenuOpening}
        isMenuOpen={isMenuOpen}
        isHomepage={isHomepage}
      />
      {isHomepage && (
        <div className="HeroText">
          <h1>Quinn Bonnett</h1>
          <h2>Registered Massage Therapist</h2>
          <a
            href="https://quinnbonnettrmt.janeapp.com/#staff_member/1"
            target="_blank"
            rel="noreferrer"
            className="AppointmentButton relative z-10 mt-12 mx-auto md:ml-0"
          >
            <FaCalendarAlt /> Book an appointment
          </a>
        </div>
      )}
      {isMenuOpening && (
        <div
          onClick={() => setIsMenuOpening(false)}
          className="MobileMenu__Background"
        ></div>
      )}
      {isHomepage && (
        <div className="w-full flex justify-center">
          <button
            onClick={() => scrollTo('#about-section')}
            aria-label="scroll down"
          >
            <div className="ScrollButton">
              <div>
                <span className="ScrollArrow ScrollArrow__First"></span>
                <span className="ScrollArrow ScrollArrow__Second"></span>
                <span className="ScrollArrow ScrollArrow__Third"></span>
              </div>
            </div>
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
