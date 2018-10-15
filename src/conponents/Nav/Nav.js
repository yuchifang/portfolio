import React from 'react'
import './Nav.scss';
 const Nav=()=> {
  return (
    <div className="navigation"> 
      <input 
            type="checkbox" 
            className="navigation__checkbox" 
            id="navi-toggle"/>
      <label 
            for="navi-toggle" 
            className="navigation__button">
            <span class="navigation__icon">&nbsp;
            </span>
            </label>
      <div className="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#Personal_profile" class="navigation__link">Personal profile</a>
            
          </li>
          <li className="navigation__item">
            <a href="#portfolio" class="navigation__link"> Portfolio</a>
           
          </li>
          <li className="navigation__item">
            <a href="#resume" class="navigation__link"> Resume</a>
          
          </li>
          
        </ul>
      </nav>
    </div>
  )
}
export default Nav;