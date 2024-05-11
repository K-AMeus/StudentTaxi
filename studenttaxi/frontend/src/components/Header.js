import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../resources/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Website Logo" className="logo-image"/>
                </Link>
            </div>
            <nav className="navigation">
                <Link to="/" className="nav-link">Trips</Link>
                <Link to="/login" className="nav-link">Login</Link>
            </nav>
        </header>
    );
};

export default Header;
