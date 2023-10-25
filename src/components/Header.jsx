import React from 'react';
import './styles/Header.css';
import Navbar from './Navbar';


function Header(props) {
    const headerStyle = {
        backgroundImage: `url(${props.bgImg})`
    }

    return <div className='Header'>
        <div className="header-section" style={headerStyle}>
            <Navbar />
            <h1 className="header-text">{props.headerText}</h1>
        </div>
    </div>
}

export default Header;
