import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  test('renders correctly on the homepage', () => {
    render(<Header isHomePage={true} />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument()
    expect(screen.getByText('Quinn Bonnett')).toBeInTheDocument()
    expect(screen.getByText('Registered Massage Therapist')).toBeInTheDocument()
    expect(screen.getByTestId('hero-book-link')).toBeInTheDocument()
    expect(screen.getByTestId('hero-book-link')).toHaveAttribute(
      'href',
      'https://quinnbonnettrmt.janeapp.com/#staff_member/1'
    )
    expect(screen.getByTestId('scroll-button')).toBeInTheDocument()
  })

  test('renders correctly on a page other than the homepage', () => {
    render(<Header isHomePage={false} />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument()
    expect(screen.queryByText('Quinn Bonnett')).toBeNull()
    expect(screen.queryByText('Registered Massage Therapist')).toBeNull()
    expect(screen.queryByTestId('hero-book-link')).toBeNull()
    expect(screen.queryByTestId('scroll-button')).toBeNull()
  })
})
