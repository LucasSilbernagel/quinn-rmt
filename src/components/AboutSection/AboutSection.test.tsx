import { render, screen } from '@testing-library/react'
import AboutSection from './AboutSection'
import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
const mockUseStaticQuery = {
  sanityHomepage: {
    about: [
      {
        _rawChildren: [{ text: 'Sample about text', _key: '1' }],
      },
    ],
    profilePhoto: {
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

describe('AboutSection', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('renders correctly', () => {
    render(<AboutSection />)
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Sample about text')).toBeInTheDocument()
    expect(screen.getByAltText('Quinn Bonnett, RMT')).toBeInTheDocument()
  })
})
