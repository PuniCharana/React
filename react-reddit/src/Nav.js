import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <ul className="nav">
      <li>
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
      </li>

      <li>
          <NavLink activeClassName='active' to='/about'>About</NavLink>
      </li>
      <li>
         <NavLink activeClassName='active' to='/render'>Render</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/noparam'>No Param</NavLink>
      </li>
      <li>
          <NavLink activeClassName='active' to='/param/123'>Param</NavLink>
      </li>
      </ul>
    );
  }
}

export default Nav;
