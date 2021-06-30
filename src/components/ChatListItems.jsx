import React from "react";
import Avatar from "./Avatar.jsx";

export default function ChatListItems(props) {
  const selectChat = (e) => {
    console.log(props.name)
  };

  return (
    <div
      style={{ animationDelay: `0.${props.animationDelay}s` }}
      onClick={selectChat}
      className={`${props.styles.chatlist__item} ${
        props.styles[`${props.active ? "active" : ""}`]
      }`}
    >
      <Avatar
        styles={props.styles}
        image={props.image ? props.image : "http://placehold.it/80x80"}
        isOnline={props.isOnline}
      />
      <div className={props.styles.userMeta}>
        <p>{props.name}</p>
        <span className={props.styles.activeTime}></span>
      </div>
    </div>
  );
}
