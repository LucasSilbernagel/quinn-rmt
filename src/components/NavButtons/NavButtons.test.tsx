import { render, screen } from '@testing-library/react'
import NavButtons from './NavButtons'
import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
const mockUseStaticQuery = {
  sanityHomepage: {
    bookingLink: 'https://quinnbonnettrmt.janeapp.com/#staff_member/1',
  },
}

describe('NavButtons', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('renders correctly', () => {
    render(<NavButtons setIsMenuOpening={jest.fn()} isHomePage={false} />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services & Pricing')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByTestId('nav-book-appointment')).toBeInTheDocument()
    expect(screen.getByTestId('nav-book-appointment')).toHaveAttribute(
      'href',
      'https://quinnbonnettrmt.janeapp.com/#staff_member/1'
    )
  })
})
