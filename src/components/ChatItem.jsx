import React from "react";
import Avatar from "./Avatar.jsx";

export default function ChatItem(props) {
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`${props.styles.chat__item} ${
        props.styles[`${props.user ? props.user : ""}`]
      }}`}
    >
      <div className={props.styles.chat__item__content}>
        <div className={props.styles.chat__msg}>{props.msg}</div>
        <div className={props.styles.chat__meta}>
          <span>16 mins ago</span>
          <span>Seen 1.03PM</span>
        </div>
      </div>
      <Avatar styles={props.styles} isOnline="active" image={props.image} />
    </div>
  );
}
