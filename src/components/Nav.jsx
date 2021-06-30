import React from "react";
import styles from "../../styles/Nav.css";

export default function Nav(props) {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__blocks}></div>
      <div className={styles.nav__blocks}></div>
      <div className={styles.nav__blocks}></div>
    </div>
  );
}
