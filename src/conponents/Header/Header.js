import React from 'react'
//import logoimg from '.././img/logo-white.png';
import './Header.scss';

const Header= () => {
    return (
      <div className="header">
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">
            HELLO</span>
            <span className="heading-primary-sub">
            this is my work</span>
            <span className="heading-primary-sub">
            hope you like it</span>
          </h1>
          <div className="center">
            <a 
               href="#" 
               className="btn btn-yellow btn-animated"
               alt="button">My PORTFOLIO</a>
          </div>
        </div>
      </div>
    )
  }

export default Header;