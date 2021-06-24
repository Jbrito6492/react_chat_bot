import React from "react";

export default function Avatar(props) {
  return (
    <div className={props.styles.avatar}>
      <div className={props.styles["avatar-img"]}>
        <img src={props.image} alt="#" />
      </div>
      <span className={`isOnline ${props.isOnline}`}></span>
    </div>
  );
}
