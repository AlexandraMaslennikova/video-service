import React from 'react';
import { NavLink } from 'react-router-dom';

function Tabs () {
    return (
      <nav className="tabs">
        <NavLink exact to="/" activeClassName="tabs__link_active" className="tabs__link">Фильмы</NavLink>
        <NavLink exact to="/channels" activeClassName="tabs__link_active" className="tabs__link">Телеканалы</NavLink>
      </nav>
    )
  }
  
  export default Tabs;