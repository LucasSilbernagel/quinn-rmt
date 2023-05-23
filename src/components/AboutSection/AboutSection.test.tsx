import { render, screen } from '@testing-library/react'
import AboutSection from './AboutSection'

describe('AboutSection', () => {
  test('renders correctly', () => {
    render(<AboutSection />)
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(
      screen.getByText(
        'I graduated with honours from International Academy of Health Science in 2018. I started working at Agility Physio clinic in Ottawa after my graduation. My approach while working with you is to understand your current goals and find strategies to help you reach them. I do this through a focused and straight forward approach regarding treatment and homecare. Whether your goal is to reach a new level of performance or to feel comfortable in the activities of daily life, I will help you get there.'
      )
    ).toBeInTheDocument()
    expect(screen.getByAltText('Quinn Bonnett, RMT')).toBeInTheDocument()
    expect(screen.getByAltText('Quinn Bonnett, RMT')).toHaveAttribute(
      'src',
      '../../images/Quinn.jpg'
    )
  })
})
