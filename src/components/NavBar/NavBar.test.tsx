import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'
import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
const mockUseStaticQuery = {
  sanityHomepage: {
    bookingLink: 'https://quinnbonnettrmt.janeapp.com/#staff_member/1',
  },
}

describe('NavBar', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('renders correctly with the menu closed', () => {
    render(
      <NavBar
        isMenuOpening={false}
        setIsMenuOpening={jest.fn()}
        isHomePage={false}
        isMenuOpen={false}
      />
    )
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument()
    expect(screen.getByTestId('icon-button')).toBeInTheDocument()
    expect(
      screen.getByAltText(
        'Quinn Bonnett, RMT. Therapeutic massage and sports injury.'
      )
    ).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).not.toHaveClass(
      'MobileMenu__Button--open'
    )
    expect(screen.getByTestId('nav-buttons-desktop')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'animate-slide-out -right-[775px]'
    )
    expect(screen.getByTestId('mobile-menu')).toHaveClass('invisible')
    expect(screen.getByTestId('nav-buttons-mobile')).toBeInTheDocument()
  })

  test('renders correctly with the menu opening', () => {
    render(
      <NavBar
        isMenuOpening={true}
        setIsMenuOpening={jest.fn()}
        isHomePage={false}
        isMenuOpen={false}
      />
    )
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument()
    expect(screen.getByTestId('icon-button')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).toHaveClass(
      'MobileMenu__Button--open'
    )
    expect(screen.getByTestId('nav-buttons-desktop')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'animate-slide-in right-0'
    )
    expect(screen.getByTestId('mobile-menu')).toHaveClass('invisible')
    expect(screen.getByTestId('nav-buttons-mobile')).toBeInTheDocument()
  })

  test('renders correctly with the menu open', () => {
    render(
      <NavBar
        isMenuOpening={false}
        setIsMenuOpening={jest.fn()}
        isHomePage={false}
        isMenuOpen={true}
      />
    )
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument()
    expect(screen.getByTestId('icon-button')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).not.toHaveClass(
      'MobileMenu__Button--open'
    )
    expect(screen.getByTestId('nav-buttons-desktop')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'animate-slide-out -right-[775px]'
    )
    expect(screen.getByTestId('mobile-menu')).toHaveClass('visible')
    expect(screen.getByTestId('nav-buttons-mobile')).toBeInTheDocument()
  })
})
