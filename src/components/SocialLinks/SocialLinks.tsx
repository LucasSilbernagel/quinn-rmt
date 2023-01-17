import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <>
      <a
        href="https://github.com/LucasSilbernagel"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size="1.2rem" />
      </a>
      <a
        href="https://www.linkedin.com/in/lucassilbernagel/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size="1.2rem" />
      </a>
      <a
        href="https://twitter.com/LucasCodePro"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter size="1.2rem" />
      </a>
    </>
  )
}

export default SocialLinks
