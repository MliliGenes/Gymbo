import React from "react";
import styles from "./home.module.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.navbar}>
        <NavLink to="/">
          <img src="./gymbo.png" alt="logo" className={styles.logo} />
        </NavLink>
        <ul className={styles.menu}>
          <li>
            <NavLink
              to="/home"
              activeClassName={styles.active}
              className={styles.link}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.link}>
              about us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.link}>
              contact
            </NavLink>
          </li>
        </ul>
        <button className={styles.btn}>sign up</button>
      </div>
    </div>
  );
}
