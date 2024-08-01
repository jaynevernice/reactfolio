import React from 'react';
import profileImg from '../../assets/profile-img.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';

import { FaFacebook, FaTwitter, FaInstagram , FaYoutube, FaTwitch, FaLinkedin, FaGithub} from 'react-icons/fa';
// import CV from '../../assets/JVCRCV.pdf'
import CV from '../../assets/Resume.pdf'
import './home.css';

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">Hello World, <span>My Name Is</span></p>
          <h1 className="home__title text-cs"> <span>JAYNE</span> VERNICE</h1>
          <p className="home__job"><span className="text-cs">I Am A</span> <b> Front-end Developer</b> </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className='home__profile'/>
            </div>

            {/* <p className="home__data home__data-one">
              <span className="text-lg">3 <b>+</b></span>
              <span className="text-sm text-cs"> Years of <span>Experience</span> </span>
            </p> */}

            {/* <p className="home__data home__data-two">
              <span className="text-lg">15</span>
              <span className="text-sm text-cs"> Completed <span>Projects</span> </span>
            </p> */}

            <img src={shapeOne} alt="" className="shape shape__1 spin" />
            <img src={shapeTwo} alt="" className="shape shape__2 spin" />
            <img src={shapeTwo} alt="" className="shape shape__3 spin" />

          </div>

          <p className="home__text">A 22 year old aspiring developer based in the Philippines. My mission is to blend aesthetics and functionality seamlessy in every project. Explore my portfolio to see how I can help businesses elevate their online presence. </p>
          
          <div className="home__socials">
            <a href="https://github.com/jaynevernice" className="home__social-link"><FaGithub/></a>
            <a href="https://web.facebook.com/jaynevernice" className="home__social-link"><FaFacebook/></a>
            <a href="https://www.twitch.tv/cosmicrevelry/" className="home__social-link"><FaTwitch/></a>
            {/* <a href="https://twitter.com/VICESANDVIRTVES" className="home__social-link"><FaTwitter/></a>  */}
            {/* <a href="" className="home__social-link"><FaInstagram/></a>  */}
            {/* <a href="https://youtube.com/@vicesxvirtues" className="home__social-link"><FaYoutube/></a> */}
            {/* <a href="" className="home__social-link"><FaLinkedin/></a> */}
          </div>

          <div className="home__btns">
            <a download='' href={CV} className="btn text-cs">Download CV</a>
            <a href="#skills" className="hero__link text-cs">My Skills</a>
          </div>

        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className='shape' />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Front-end Developer</span>
      </div>

    </section>
  )
}

export default Home