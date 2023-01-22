import { StaticImage } from 'gatsby-plugin-image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import NavButtons from '../NavButtons/NavButtons'
import './NavBar.css'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { navigate } from 'gatsby'

interface NavBarProps {
  isMenuOpening: boolean
  isMenuOpen: boolean
  setIsMenuOpening: Dispatch<SetStateAction<boolean>>
  isHomepage: boolean
}

const NavBar = (props: NavBarProps) => {
  const { isMenuOpening, setIsMenuOpening, isMenuOpen, isHomepage } = props

  const [currentScrollPos, setCurrentScrollPos] = useState(0)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isNavVisible, setIsNavVisible] = useState(true)

  const handleScroll = () => {
    setCurrentScrollPos(window.pageYOffset)
    setPrevScrollPos(currentScrollPos)
    setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 70)
  }

  const handleIconButtonClick = () => {
    setIsMenuOpening(false)
    if (isHomepage) {
      scrollTo('#header')
    }
    if (!isHomepage) {
      navigate('/')
      setTimeout(() => {
        scrollTo('#header')
      }, 100)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, isNavVisible, handleScroll])

  return (
    <nav
      className={`Nav ${
        isNavVisible ? 'top-0 backdrop-blur-[3px] bg-white' : 'top-[-120px]'
      } ${currentScrollPos > 80 ? 'shadow-lg pb-4' : ''}`}
    >
      <div className="z-10">
        <button className="IconButton" onClick={handleIconButtonClick}>
          <StaticImage
            src="../../images/logo.png"
            alt="Quinn Bonnett, RMT. Therapeutic massage and sports injury."
            className="h-full w-full"
          />
        </button>
      </div>
      <div className={`flex lg:hidden z-20 fixed right-4`}>
        <button
          aria-label={isMenuOpening ? 'Close mobile menu' : 'Open mobile menu'}
          onClick={() => setIsMenuOpening(!isMenuOpen)}
          className={`MobileMenu__Button ${
            isMenuOpening ? 'MobileMenu__Button--open' : ''
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div>
        <div className="NavButtons NavButtons__Desktop">
          <NavButtons isHomepage={isHomepage} />
        </div>
        <div
          className={`MobileMenu ${
            isMenuOpening
              ? 'animate-slide-in right-0'
              : 'animate-slide-out -right-[500px]'
          } ${isMenuOpen ? 'visible' : 'invisible'}`}
        >
          <div className="NavButtons">
            <NavButtons
              setIsMenuOpening={setIsMenuOpening}
              isHomepage={isHomepage}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
