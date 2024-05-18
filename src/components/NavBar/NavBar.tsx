import { StaticImage } from 'gatsby-plugin-image'
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import NavButtons from '../NavButtons/NavButtons'
import './NavBar.css'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { navigate } from 'gatsby'
import FocusTrap from 'focus-trap-react'

interface NavBarProps {
  isMenuOpening: boolean
  isMenuOpen: boolean
  setIsMenuOpening: Dispatch<SetStateAction<boolean>>
  isHomePage: boolean
  windowWidth: number
}

const MenuContainer = ({
  isMenuOpening,
  windowWidth,
  children,
}: {
  isMenuOpening: boolean
  windowWidth: number
  children: ReactNode
}) => {
  if (windowWidth < 1024 && isMenuOpening) {
    return (
      <FocusTrap
        focusTrapOptions={{
          clickOutsideDeactivates: true,
          escapeDeactivates: true,
        }}
      >
        <div role="dialog" aria-modal="true" aria-label="navigation menu">
          {children}
        </div>
      </FocusTrap>
    )
  } else {
    return <div>{children}</div>
  }
}

const NavBar = (props: NavBarProps) => {
  const {
    isMenuOpening,
    setIsMenuOpening,
    isMenuOpen,
    isHomePage,
    windowWidth,
  } = props

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
    if (isHomePage) {
      scrollTo('#header')
    }
    if (!isHomePage) {
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
      data-testid="nav-bar"
      className={`Nav ${
        isNavVisible ? 'top-0 backdrop-blur-[3px] bg-white' : 'top-[-120px]'
      } ${currentScrollPos > 80 ? 'shadow-lg pb-4' : ''}`}
    >
      <div className="z-10">
        <button
          className="IconButton"
          onClick={handleIconButtonClick}
          data-testid="icon-button"
          aria-label="home"
        >
          <StaticImage
            src="../../images/logo.png"
            alt=""
            className="h-full w-full"
          />
        </button>
      </div>
      <MenuContainer isMenuOpening={isMenuOpening} windowWidth={windowWidth}>
        <div className={`flex lg:hidden z-20 fixed right-4 top-[35px]`}>
          <button
            aria-label={
              isMenuOpening ? 'Close mobile menu' : 'Open mobile menu'
            }
            aria-expanded={isMenuOpening}
            onClick={() => setIsMenuOpening(!isMenuOpen)}
            className={`MobileMenu__Button ${
              isMenuOpening ? 'MobileMenu__Button--open' : ''
            }`}
            data-testid="mobile-menu-button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div>
          <div
            className="NavButtons NavButtons__Desktop"
            data-testid="nav-buttons-desktop"
          >
            <NavButtons isHomePage={isHomePage} />
          </div>
          <div
            className={`MobileMenu ${
              isMenuOpening
                ? 'animate-slide-in right-0'
                : 'animate-slide-out -right-[775px]'
            } ${isMenuOpen ? 'visible' : 'invisible'}`}
            data-testid="mobile-menu"
          >
            <ul className="NavButtons" data-testid="nav-buttons-mobile">
              <NavButtons
                setIsMenuOpening={setIsMenuOpening}
                isHomePage={isHomePage}
              />
            </ul>
          </div>
        </div>
      </MenuContainer>
    </nav>
  )
}

export default NavBar
