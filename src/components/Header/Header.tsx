import { useEffect, useState } from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import NavBar from '../NavBar/NavBar'
import './Header.css'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { graphql, useStaticQuery } from 'gatsby'

interface HeaderProps {
  isHomePage: boolean
}

const Header = ({ isHomePage }: HeaderProps) => {
  const [isMenuOpening, setIsMenuOpening] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setWindowWidth])

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
      document.body.style.overflow = 'auto'
      setTimeout(() => {
        setIsMenuOpen(false)
      }, 500)
    }
  }, [isMenuOpening, isMenuOpen])

  useEffect(() => {
    if (windowWidth > 1023) {
      setIsMenuOpening(false)
      document.body.style.overflow = 'auto'
    }
  }, [windowWidth])

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      sanityHomepage {
        bookingLink
      }
    }
  `)

  return (
    <header className="scroll-mt-72" id="header" data-testid="header">
      <NavBar
        isMenuOpening={isMenuOpening}
        setIsMenuOpening={setIsMenuOpening}
        isMenuOpen={isMenuOpen}
        isHomePage={isHomePage}
        windowWidth={windowWidth}
      />
      {isHomePage && (
        <div className="HeroText">
          <h1>Quinn Bonnett</h1>
          <h2>Registered Massage Therapist</h2>
          <a
            href={data.sanityHomepage.bookingLink}
            target="_blank"
            rel="noreferrer"
            className="AppointmentButton relative z-10 mt-12 mx-auto md:ml-0"
            data-testid="hero-book-link"
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
      {isHomePage && (
        <div className="ScrollButton" data-testid="scroll-button">
          <button
            onClick={() => scrollTo('#about-section')}
            aria-label="scroll down"
          >
            <div>
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
