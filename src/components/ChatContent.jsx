import React, { useState, createRef, useEffect } from "react";
import Avatar from "./Avatar.jsx";
import ChatItem from "./ChatItem.jsx";
import styles from "../../styles/ChatContent.css";

export default function ChatContent(props) {
  const messagesEndRef = createRef(null);
  let chatItems = [
    {
      key: 1,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  const [state, setState] = useState({ chatItems, msg: "" });

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (state.msg != "") {
          let item = {
            key: 1,
            type: "",
            msg: state.msg,
            image:
              "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          };
          setState({
            ...state,
            chatItems: [...chatItms, item],
            chat: chatItems,
            msg: "",
          });
          scrollToBottom();
        }
      }
    });
  });

  const onStateChange = (e) => {
    setState({ ...state, msg: e.target.value });
  };

  return (
    <div className={styles.main__chatcontent}>
      <div className={styles.content__header}>
        <div className={styles.blocks}>
          <div className={styles["current-chatting-user"]}>
            <Avatar
              styles={styles}
              isOnline="active"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <p>Tim Hover</p>
          </div>
        </div>

        <div className={styles.blocks}>
          <div className={styles.settings}>
            <button className={styles["btn-nobg"]}>
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.content__body}>
        <div className={styles.chat__items}>
          {state.chatItems.map((itm, index) => {
            return (
              <ChatItem
                styles={styles}
                animationDelay={index + 2}
                key={itm.key}
                user={itm.type ? itm.type : "me"}
                msg={itm.msg}
                image={itm.image}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className={styles.content__footer}>
        <div className={styles.sendNewMessage}>
          <button className={styles.addFiles}>
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            onChange={onStateChange}
            value={state.msg}
          />
          <button className={styles.btnSendMsg} id="sendMsgBtn">
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
