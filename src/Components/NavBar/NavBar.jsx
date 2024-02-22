import React from "react";
import { NavHashLink } from "react-router-hash-link";
import styles from "./NavBar.module.css";
import logoImage from '../../assets/logo.png';
import icon from '../../assets/Icon.png';

const NavBar = () => {
  return (
    <header>
      <div className={styles['logo-sun']}>
        <img className={styles.logo} src={logoImage} alt="logo" />
        <span className={styles['sun-energy']}>Sun Energy</span>
      </div>
      <nav className={styles.menu}>
        <ul>
          <NavItem to="/home" text="Home" />
          <NavItem to="/home#services" text="Services" />
          <NavItem to="/home#partners" text="Partners" />
          <NavItem to="/home#innovation" text="Innovation" />
          <NavItem to="/home#support" text="Support" />
          <NavItem to="/home#aboutus" text="About Us" />
        </ul>
      </nav>
      <div className={styles['contact-container']}>
        <span>Contact Us</span>
        <img src={icon} alt="icon" />
      </div>
    </header>
  );
};

const NavItem = ({ to, text }) => (
  <li>
    <NavHashLink to={to} >
      {text}
    </NavHashLink>
  </li>
);

export default NavBar;
