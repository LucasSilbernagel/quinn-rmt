import { render, screen } from '@testing-library/react'
import AboutSection from './AboutSection'

describe('AboutSection', () => {
  test('renders correctly', () => {
    render(<AboutSection />)
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
  })
})
