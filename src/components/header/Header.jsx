import React, { useEffect, useState } from 'react'
import {links} from '../../Data'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaLinkedin, FaGithub } from 'react-icons/fa';
import {BsSun, BsMoon} from 'react-icons/bs'
import './header.css'
import {Link} from 'react-scroll'
import { animateScroll } from 'react-scroll';
import shapeOne from '../../assets/shape-1.png';

// retrieve theme preference from web browser
const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
}

const Header = () => {

    // state variables
    const [showMenu, setShowMenu] = useState(false); // control visibility of mobile nav
    const [scrollNav, setScrollNav] = useState(false); // control header appearance when scrolling
    const [theme, setTheme] = useState(getStorageTheme()); // control the theme

    const scrollTop = () => {
        animateScroll.scrollToTop();
    }

    const changeNav = () => {
        if(window.scrollY >= 80) { // determine if user scrolled down more then 80px
            setScrollNav(true); // if true the header should have different style
        } else {
            setScrollNav(false);
        }
    }

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    }

    // hook used to add event listener to window object for scrolling and call changeNav when component mounts
    useEffect(() => { 
        window.addEventListener('scroll', changeNav)
    }, []);

    // hook use to toggle class no-scroll on document.body element to prevent scrolling when menu is open
    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu]);

    // set class theme on document.documentElement to apply selected theme and save to localStorage
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
            <nav className="nav">
                <Link to='/' onClick={scrollTop} className="nav__logo text-cs">JVCR</Link>

                <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                    <div className="nav__data">
                        <ul className="nav__list">
                            {links.map(({name, path}, index) => {
                                return (
                                    <li className="nav__item" key={index}>
                                        <Link className='nav__link text-cs' to={path} spy={true} hashSpy={true} smooth={true} offset={-90} duration={500} onClick={() => setShowMenu(!showMenu)}>
                                            {name}
                                        </Link>
                                    </li>
                                )
                            })}  
                        </ul>

                        <div className="header__socials">
                        <a href="https://github.com/jaynevernice" className="header__social-link"><FaGithub/></a>
                        <a href="https://web.facebook.com/jaynevernice" className="header__social-link"><FaFacebook/></a>
                        <a href="https://www.twitch.tv/cosmicrevelry/" className="header__social-link"><FaTwitch/></a>
                        {/* <a href="https://twitter.com/VICESANDVIRTVES" className="header__social-link"><FaTwitter/></a> 
                        <a href="" className="home__social-link"><FaInstagram/></a> 
                        <a href="https://youtube.com/@vicesxvirtues" className="header__social-link"><FaYoutube/></a>
                        <a href="" className="home__social-link"><FaLinkedin/></a> */}
                        </div>
                    </div>

                    <div className="section__deco deco__left header__deco">
                        <img src={shapeOne} alt="" className='shape' />
                    </div>
                </div>
                
                <div className="nav__btns">
                    <div className="theme__toggler" onClick={toggleTheme}>
                        {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                    </div>
                    <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() => setShowMenu(!showMenu)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header 