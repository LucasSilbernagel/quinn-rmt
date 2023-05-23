import { ReactNode } from 'react'
import Seo from './Seo'
import Header from './Header/Header'
import Footer from './Footer/Footer'

interface ILayoutProps {
  pageTitle: string
  pageRoute: string
  isHomePage: boolean
  children: ReactNode
  pageDescription?: string
  pageImage?: string
}

const Layout = (props: ILayoutProps) => {
  const {
    pageTitle,
    pageDescription,
    pageImage,
    pageRoute,
    children,
    isHomePage,
  } = props

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageImage={pageImage}
        pageRoute={pageRoute}
      />
      <Header isHomePage={isHomePage} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
