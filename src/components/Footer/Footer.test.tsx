import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  test('renders correctly', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('copyright')).toBeInTheDocument()
    expect(screen.getByTestId('copyright')).toHaveTextContent(
      'Quinn Bonnett, RMT'
    )
    expect(screen.getByText('Website built by')).toBeInTheDocument()
    expect(screen.getByText('Lucas Silbernagel')).toBeInTheDocument()
    expect(screen.getByText('Lucas Silbernagel')).toHaveAttribute(
      'href',
      'https://lucassilbernagel.com/'
    )
  })
})
