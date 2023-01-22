import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="mt-12 mb-6">
      <div className="text-black text-center mt-6 text-sm">
        <p className="mb-4 max-w-max mx-auto flex items-center">
          <FaCopyright aria-label="copyright" className="mr-2 text-xs" /> Quinn
          Bonnett, RMT
        </p>
        <p>
          Website built by{' '}
          <a
            href="https://lucassilbernagel.com/"
            target="_blank"
            rel="noreferrer"
            className="ExternalLink font-bold"
          >
            Lucas Silbernagel
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
