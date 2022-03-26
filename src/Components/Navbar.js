import './navbar.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showNavbar, toggleShowNavbar] = useState(false)
    const [navbarStyle, setNavbarStyle] = useState({});
    const [navbarItemLinkStyle, setNavbarItemLinkStyle] = useState({});

    useEffect(() => {
        if (showNavbar) {
            setNavbarStyle({height: 270+'px'});
            setNavbarItemLinkStyle({
                opacity: 1,
                height: 50+'px',
            });
        }
        else {
            setNavbarStyle({height: 0+'px'});
            setNavbarItemLinkStyle({
                opacity: 0,
                height: 0,
                transform: 'translateY(30px)',
                transition: 'all 350ms ease-in-out, transform 0ms 500ms'
            });
        }
    }, [showNavbar]);

    return (
        <div className="navbar-container">
            <ul className="navbar" style={navbarStyle}>
                <Link to="/" className="navbar-item" style={{textDecoration: 'none'}}><li style={navbarItemLinkStyle} className='navbar-link'>Home</li></Link>
                <Link to="/portfolio" className="navbar-item" style={{textDecoration: 'none'}}><li style={navbarItemLinkStyle} className='navbar-link'>Portfolio</li></Link>
                <Link to="/blog" className="navbar-item" style={{textDecoration: 'none'}}><li style={navbarItemLinkStyle} className='navbar-link'>Blog</li></Link>
                <Link to="/contact" className="navbar-item" style={{textDecoration: 'none'}}><li style={navbarItemLinkStyle} className='navbar-link'>Contact</li></Link>
                <div className="hamburger-btn" onClick={() => {toggleShowNavbar(!showNavbar)}}>
                    <div className="hamburger-icon">
                        <span className="hamburger-middle"/>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Navbar