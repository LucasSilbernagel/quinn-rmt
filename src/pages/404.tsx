import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404" pageRoute="/404" isHomePage={false}>
      <div className="text-center mb-36">
        <h1 className="text-9xl font-black text-accent-1 mb-4">404</h1>
        <h2 className="font-black text-4xl mb-8">Page Not Found</h2>
        <div className="flex justify-center items-center">
          <Link className="AppointmentButton" to="/">
            Go back
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
