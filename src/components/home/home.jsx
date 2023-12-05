import React from "react";
import styles from "./home.module.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.navbar}>
        <NavLink to="/">
          <img src="./gymbo.svg" alt="logo" className={styles.logo} />
        </NavLink>
        <div className={styles.nav}>
          {/* <ul className={styles.menu}>
            <li>
              <NavLink to="/home" className={styles.link + " " + styles.active}>
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
          </ul> */}
          <button className={styles.btn}>sign up</button>
        </div>
      </div>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          <span>Transform</span> Your <span>Fitness</span> Journey with Gym
          <span>bo</span>
        </h1>
        <p className={styles.subtitle}>
          Your Personalized Gym Companion for Achieving Health and Strength
        </p>
        <NavLink className={styles.start}>
          Get Started with Gymbo
          <i className="fa-solid fa-right-to-bracket"></i>
        </NavLink>
      </div>
    </div>
  );
}
