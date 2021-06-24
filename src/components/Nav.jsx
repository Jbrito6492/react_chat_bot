import React from "react";
import styles from "../../styles/Nav.css";
import logo from "../../public/assets/raul_bot.png";

export default function Nav(props) {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__blocks}>
        <img src={logo}></img>
      </div>
      <div className={styles.nav__blocks}></div>
      <div className={styles.nav__blocks}></div>
    </div>
  );
}
