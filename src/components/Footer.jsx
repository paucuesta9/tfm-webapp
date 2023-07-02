import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
      <img src='/logo-upc.png' alt='UPC Logo' />
      <div className='info'>
        <p>Powered by Pau Cuesta Arcos</p>
        <p>TFM - Analysis of bridge-solutions for public blockchains</p>
        <div className='rrss'>
          <a href='https://www.linkedin.com/in/pau-cuesta' target='_blank' rel='noreferrer'> <FontAwesomeIcon icon={faLinkedin} /> </a>
          <a href='https://www.github.com/paucuesta9' target='_blank' rel='noreferrer'> <FontAwesomeIcon icon={faGithub} /> </a>
        </div>
        {/* copyright */}
        <p>© 2023 Pau Cuesta Arcos</p>
      </div>
      <img src='/etsetb-logo.png' alt='ETSETB Logo' />
    </footer>
  )
}

export default Footer
