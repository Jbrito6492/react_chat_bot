import React from "react";
import Avatar from "./Avatar.jsx";

export default function ChatListItems(props) {
  const selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };

  return (
    <div
      style={{ animationDelay: `0.${props.animationDelay}s` }}
      onClick={selectChat}
      className={`${props.styles.chatlist__item} ${
        props.styles[`${props.active ? props.active : ""}`]
      }`}
    >
      <Avatar
        styles={props.styles}
        image={props.image ? props.image : "http://placehold.it/80x80"}
        isOnline={props.isOnline}
      />

      <div className={props.styles.userMeta}>
        <p>{props.name}</p>
        <span className={props.styles.activeTime}>32 mins ago</span>
      </div>
    </div>
  );
}
