import { Link, HeadFC } from 'gatsby'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { SEO } from '../components/Seo'

export const Head: HeadFC = () => (
  <SEO title="Page Not Found | Quinn Bonnett, RMT" />
)

const NotFoundPage = () => {
  return (
    <>
      <Header isHomepage={false} />
      <main className="text-center mb-36">
        <h1 className="text-9xl font-black text-accent-1 mb-4">404</h1>
        <h2 className="font-black text-4xl mb-8">Page Not Found</h2>
        <div className="flex justify-center items-center">
          <Link className="AppointmentButton" to="/">
            Go back
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFoundPage
