import { StaticImage } from 'gatsby-plugin-image'
import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import SideBars from '../SideBars/SideBars'
import './Header.css'

interface HeaderProps {
  isHomepage: boolean
}

const Header = ({ isHomepage }: HeaderProps) => {
  const [isMenuOpening, setIsMenuOpening] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setWindowHeight])

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
        <>
          <div className="HeroText">
            <h1>Lucas Silbernagel</h1>
            <h2>Front-End Developer</h2>
            <a
              href="mailto:hello@lucassilbernagel.com"
              target="_blank"
              rel="noreferrer"
              className="AccentButton relative z-10"
            >
              Say hello
            </a>
          </div>
          {windowHeight >= 568 && (
            <div className="HeroImage">
              <StaticImage alt="" src="../../images/toronto.png" />
            </div>
          )}
        </>
      )}
      {isMenuOpening && (
        <div
          onClick={() => setIsMenuOpening(false)}
          className="MobileMenu__Background"
        ></div>
      )}
      <SideBars />
    </header>
  )
}

export default Header
