import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaLinkedin, FaGithub } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
              <a href="https://github.com/jaynevernice" className="home__social-link"><FaGithub/></a>
              <a href="https://web.facebook.com/jaynevernice" className="home__social-link"><FaFacebook/></a>
              <a href="https://www.twitch.tv/cosmicrevelry/" className="home__social-link"><FaTwitch/></a>
              {/* <a href="https://twitter.com/VICESANDVIRTVES" className="home__social-link"><FaTwitter/></a>  */}
              {/* <a href="" className="home__social-link"><FaInstagram/></a>  */}
              {/* <a href="https://youtube.com/@vicesxvirtues" className="home__social-link"><FaYoutube/></a> */}
              {/* <a href="" className="home__social-link"><FaLinkedin/></a> */}

            </div>

            <p className="footer__copyright text-cs">&copy; 2024 <span>JVCR</span>. All Rights Reserved</p>

            <p className="footer__copyright text-cs">Developed By <span>JayneVernice</span></p>

        </div>
    </footer>
  )
}

export default Footer