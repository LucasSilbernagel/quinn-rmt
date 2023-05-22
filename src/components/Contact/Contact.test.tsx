import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
  test('renders correctly', () => {
    render(<Contact />)
    expect(screen.getByTestId('contact-section')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Address:')).toBeInTheDocument()
    expect(screen.getByText('Quinn Bonnett, RMT')).toBeInTheDocument()
    expect(screen.getByText('38 Main St E')).toBeInTheDocument()
    expect(screen.getByText('Vankleek Hill, ON')).toBeInTheDocument()
    expect(screen.getByText('K0B 1R0')).toBeInTheDocument()
    expect(screen.getByText('QuinnBonnettRMT@outlook.com')).toBeInTheDocument()
    expect(screen.getByText('QuinnBonnettRMT@outlook.com')).toHaveAttribute(
      'href',
      'mailto:quinnbonnettrmt@outlook.com'
    )
    expect(screen.getByText('514-779-4129')).toBeInTheDocument()
    expect(screen.getByText('514-779-4129')).toHaveAttribute(
      'href',
      'tel:514-779-4129'
    )
    expect(screen.getByTestId('facebook-icon-link')).toBeInTheDocument()
    expect(screen.getByTestId('facebook-icon-link')).toHaveAttribute(
      'href',
      'https://www.facebook.com/profile.php?id=100089508584242'
    )
    expect(screen.getByText('Reach out on Facebook!')).toBeInTheDocument()
    expect(screen.getByText('Reach out on Facebook!')).toHaveAttribute(
      'href',
      'https://www.facebook.com/profile.php?id=100089508584242'
    )
    expect(screen.getByTestId('map-image')).toBeInTheDocument()
    expect(screen.getByTestId('map-image')).toHaveAttribute(
      'src',
      '../../images/location.png'
    )
  })
})
