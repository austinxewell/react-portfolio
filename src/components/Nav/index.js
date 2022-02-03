import React from "react";
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="flex-row px-1 navBackground">
      <label className='hambergerMenu' for='toggle' >&#9776;</label>
      <div>
        <h1>Austin Ewell</h1>
        <p className="slogan">-Motivated.Driven.Professional-</p>
      </div>
      <input type='checkbox' id='toggle'></input>
      <div className="flex-row navLayout">
        <NavLink exact to='/' className='nav-link' activeClassName='nav-linkActive'>Professional</NavLink>
        <NavLink exact to='/personal' className='nav-link' activeClassName='nav-linkActive'>Personal</NavLink>
        <NavLink exact to='/portfolio' className='nav-link' activeClassName='nav-linkActive'>Portfolio</NavLink>
        <NavLink exact to='/contact' className='nav-link' activeClassName='nav-linkActive'>Contact</NavLink>
        <NavLink exact to='/resume' className='nav-link' activeClassName='nav-linkActive'>Resume</NavLink>  
      </div>
    </nav>
  )
}

export default Nav;