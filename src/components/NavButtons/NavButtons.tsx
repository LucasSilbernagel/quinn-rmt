import React, { Dispatch, SetStateAction } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { navigate, graphql, useStaticQuery } from 'gatsby'
import { FaCalendarAlt } from 'react-icons/fa'

interface NavButtonsProps {
  isHomePage: boolean
  setIsMenuOpening?: Dispatch<SetStateAction<boolean>>
}

const NavButtons = (props: NavButtonsProps) => {
  const { setIsMenuOpening, isHomePage } = props

  const buttons = [
    { label: 'About', selector: '#about-section' },
    { label: 'Services & Pricing', selector: '#services-section' },
    { label: 'Contact', selector: '#contact-section' },
  ]

  const handleClick = (selector: string) => {
    if (setIsMenuOpening) {
      setIsMenuOpening(false)
    }
    if (isHomePage) {
      scrollTo(selector)
    }
    if (!isHomePage) {
      navigate('/')
      setTimeout(() => {
        scrollTo(selector)
      }, 100)
    }
  }

  const data = useStaticQuery(graphql`
    query NavButtons {
      sanityHomepage {
        bookingLink
      }
    }
  `)

  return (
    <>
      {buttons.map((button) => {
        return (
          <button
            key={button.selector}
            onClick={() => handleClick(button.selector)}
          >
            {button.label}
          </button>
        )
      })}
      <a
        href={data.sanityHomepage.bookingLink}
        target="_blank"
        rel="noreferrer"
        className="AppointmentButton"
        data-testid="nav-book-appointment"
      >
        <FaCalendarAlt /> Book an appointment
      </a>
    </>
  )
}

export default NavButtons
