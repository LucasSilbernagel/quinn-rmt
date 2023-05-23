import { render, screen } from '@testing-library/react'
import Services from './Services'
import { SERVICES } from '../../content/services'

describe('Services', () => {
  test('renders correctly', () => {
    render(<Services />)
    expect(screen.getByTestId('services-section')).toBeInTheDocument()
    expect(screen.getByText('Services & Pricing')).toBeInTheDocument()
    expect(
      screen.getByText('Therapeutic and Sports Injury Massage')
    ).toBeInTheDocument()
    SERVICES.forEach((service) => {
      expect(screen.getByText(service.time)).toBeInTheDocument()
      expect(screen.getByText(service.price)).toBeInTheDocument()
    })
    expect(
      screen.getByText('All prices include tax and are in Canadian dollars.')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Only cash or e-Transfer are accepted at this time.')
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Questions? Please reach out using the contact information below.'
      )
    ).toBeInTheDocument()
  })
})
