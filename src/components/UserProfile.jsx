import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "../../styles/UserProfile.css";

export default function UserProfile(props) {
  const toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
    return (
      <div className={styles.main__userprofile}>
        <div className={`${styles.profile__card} ${styles.user__profile__image}`}>
          <div className={styles.profile__image}>
            <img src="https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg" />
          </div>
          <h4>Fernando Faucho</h4>
          <p>CEO & Founder at Highly Inc</p>
        </div>
        <div className={styles.profile__card}>
          <div className={styles.card__header} onClick={toggleInfo}>
            <h4>Information</h4>
            <AiOutlineArrowDown size={20} />
          </div>
          <div className={styles.card__content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
}