import { render, screen } from '@testing-library/react'
import Services from './Services'
import * as Gatsby from 'gatsby'

const mockServices = [
  { time: '30 minutes', price: '$30.00', _key: '1' },
  { time: '60 minutes', price: '$60.00', _key: '2' },
]

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
const mockUseStaticQuery = {
  sanityHomepage: {
    prices: mockServices,
    pricingDescription: [
      {
        _rawChildren: [{ text: 'Example pricing description text', _key: '1' }],
      },
    ],
  },
}

describe('Services', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('renders correctly', () => {
    render(<Services />)
    expect(screen.getByTestId('services-section')).toBeInTheDocument()
    expect(screen.getByText('Services & Pricing')).toBeInTheDocument()
    expect(
      screen.getByText('Therapeutic and Sports Injury Massage')
    ).toBeInTheDocument()
    mockServices.forEach((service) => {
      expect(screen.getByText(service.time)).toBeInTheDocument()
      expect(screen.getByText(service.price)).toBeInTheDocument()
    })
    expect(
      screen.getByText('Example pricing description text')
    ).toBeInTheDocument()
  })
})
