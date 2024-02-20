import React from "react";
import { NavHashLink } from "react-router-hash-link";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <header>
      <div className={styles["logo-sun"]}>
        <img className={styles.logo} src="src/assets/logo.png" alt="logo" />
        <span className={styles["sun-energy"]}>Sun Energy</span>
      </div>
      <nav className={styles.menu}>
        <ul>
          <li>
            <NavHashLink to="/home" activeClassName="active">
              Home
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/home#services" activeClassName="active">
              Services
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/home#partners" activeClassName="active">
              Partners
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/home#inovation" activeClassName="active">
              Inovation
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/home#support" activeClassName="active">
              Support
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/home#aboutus" activeClassName="active">
              About Us
            </NavHashLink>
          </li>
        </ul>
      </nav>
      <div className={styles["contact-container"]}>
        <span>Contact Us</span>
        <img src="src/assets/Icon.png" alt="icon" />
      </div>
    </header>
  );
};

export default NavBar;
