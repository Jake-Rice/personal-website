import './navbar.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

let navbarLeftExpanded = false;

const Navbar = () => {
    const [showNavbar, toggleShowNavbar] = useState(navbarLeftExpanded);
    const [navbarStyle, setNavbarStyle] = useState({});
    const [navbarItemLinkStyle, setNavbarItemLinkStyle] = useState({});
    let prevWidth = window.innerWidth;

    function handleResize() {
        if (prevWidth < 576 && window.innerWidth >= 576) topNavbar();
        else if (prevWidth >= 576 && window.innerWidth < 576) bottomNavbar();
        prevWidth = window.innerWidth;
    }

    function topNavbar() {
        setNavbarStyle({
            height: '90px',
            transition: 'all 0ms'
        });
        setNavbarItemLinkStyle({
            opacity: 1,
            transition: 'all 0ms'
        });
    }

    function bottomNavbar() {
        if (navbarLeftExpanded) {
            setNavbarStyle({
                height: '300px',
                transition: 'all 0ms'
            });
            setNavbarItemLinkStyle({
                opacity: 1,
                transition: 'all 0ms'
            });
        }
        else {
            setNavbarStyle({
                height: '0px',
                transition: 'all 0ms'
            });
            setNavbarItemLinkStyle({
                opacity: 0,
                transition: 'all 0ms'
            });
        }
    }

    useEffect(() => {
        (window.innerWidth >= 576) ? topNavbar() : bottomNavbar();
        window.addEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
            if (showNavbar) {
                setNavbarStyle({height: '300px'});
                setNavbarItemLinkStyle({
                    opacity: 1
                });
                navbarLeftExpanded = true;
            }
            else if (window.innerWidth < 576) {
                setNavbarStyle({height: 0+'px',
                    transition: 'all 350ms ease-in-out'
                });
                setNavbarItemLinkStyle({
                    opacity: 0,
                    transition: 'all 350ms ease-in-out'
                });
                navbarLeftExpanded = false;
            }
    }, [showNavbar]);

    return (
        <div className="navbar-container">
            <ul className="navbar" style={navbarStyle}>
                <Link to="/" className="navbar-item"><li style={navbarItemLinkStyle} className='navbar-link'>Home</li><hr/></Link>
                <Link to="/portfolio" className="navbar-item"><li style={navbarItemLinkStyle} className='navbar-link'>Portfolio</li><hr/></Link>
                <Link to="/blog" className="navbar-item"><li style={navbarItemLinkStyle} className='navbar-link'>Blog</li><hr/></Link>
                <Link to="/contact" className="navbar-item"><li style={navbarItemLinkStyle} className='navbar-link'>Contact</li><hr/></Link>
                <div className="navbar-spacer-bottom"></div>
            </ul>
            <div className="hamburger-btn" onClick={() => {toggleShowNavbar(!showNavbar)}}>
                <div className="hamburger-icon">
                    <span className="hamburger-middle"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar