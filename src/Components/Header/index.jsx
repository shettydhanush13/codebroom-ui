import React from 'react';
import logo from '../../Assets/logo.svg'
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <div className="logo_wrapper">
          <img src={logo} alt="" />
          <h2>CodeBroom</h2>
        </div>
      </nav>
      <nav className="nav-links center-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/docs">
          Docs
        </NavLink>
      </nav>
      <nav className="nav-links login_button">
        <NavLink to="/login">
          Login to sync your repos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
