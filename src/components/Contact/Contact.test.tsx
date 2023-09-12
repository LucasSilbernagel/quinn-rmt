import { render, screen } from '@testing-library/react'
import Contact from './Contact'
import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
const mockUseStaticQuery = {
  sanityHomepage: {
    address: [
      {
        _rawChildren: [{ text: 'Sample address text', _key: '1' }],
      },
    ],
    email: 'example@email.com',
    phone: '555-555-5555',
    map: {
      asset: {
        gatsbyImageData: {
          images: {
            sources: [],
            fallback: {
              src: 'https://cdn.sanity.io/images/3npve6dv/production/8194b373c29cc9bb6b656614e8a5f77a21549a4a-477x523.jpg?w=477&h=523&auto=format',
              srcSet:
                'https://cdn.sanity.io/images/3npve6dv/production/8194b373c29cc9bb6b656614e8a5f77a21549a4a-477x523.jpg?w=320&h=351&auto=format 320w,\nhttps://cdn.sanity.io/images/3npve6dv/production/8194b373c29cc9bb6b656614e8a5f77a21549a4a-477x523.jpg?w=477&h=523&auto=format 477w',
              sizes: '(min-width: 477px) 477px, 100vw',
            },
          },
          layout: 'constrained',
          backgroundColor: '#c4bcb3',
          width: 477,
          height: 523,
        },
      },
    },
  },
}

describe('Contact', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('renders correctly', () => {
    render(<Contact />)
    expect(screen.getByTestId('contact-section')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Address:')).toBeInTheDocument()
    expect(screen.getByText('Sample address text')).toBeInTheDocument()
    expect(screen.getByText('example@email.com')).toBeInTheDocument()
    expect(screen.getByText('example@email.com')).toHaveAttribute(
      'href',
      'mailto:example@email.com'
    )
    expect(screen.getByText('555-555-5555')).toBeInTheDocument()
    expect(screen.getByText('555-555-5555')).toHaveAttribute(
      'href',
      'tel:555-555-5555'
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
  })
})
