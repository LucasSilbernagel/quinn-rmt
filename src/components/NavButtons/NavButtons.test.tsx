import { render, screen } from '@testing-library/react'
import NavButtons from './NavButtons'

describe('NavButtons', () => {
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
