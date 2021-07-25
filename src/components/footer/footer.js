import './styles.css'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaRss, FaYoutube } from "react-icons/fa";

function Footer() {
  return(
    <>
      <section className="footer-main">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2021 - <span>Sneak</span> All Right Reserved</p>
          </div>
          <div className="footer-icons">
            <FaFacebookF className="social-icon"/>
            <FaTwitter className="social-icon"/>
            <FaRss className="social-icon"/>
            <FaGooglePlusG className="social-icon"/>
            <FaYoutube className="social-icon"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer