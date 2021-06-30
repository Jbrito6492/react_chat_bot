import React from "react";
import Avatar from "./Avatar.jsx";
import { useDispatch } from "react-redux";
import { selectEnglish, selectSpanish } from "../../store/actions";

export default function ChatListItems(props) {
  const dispatch = useDispatch();
  const selectChat = (e) => {
    props.name.split(" ")[1] === "Inglesias"
      ? dispatch(selectEnglish())
      : dispatch(selectSpanish());
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
