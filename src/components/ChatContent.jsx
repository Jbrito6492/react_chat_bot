import React, { useState, createRef } from "react";
import Avatar from "./Avatar.jsx";
import ChatItem from "./ChatItem.jsx";
import { BiCog, BiPlus, BiPaperPlane } from "react-icons/bi";
import Inglesias from "../../public/assets/inglesias.png";
import Bot from "../../public/assets/raul_bot.png";
import User from "../../public/assets/user_default.png";
import axios from "axios";
import styles from "../../styles/ChatContent.css";

export default function ChatContent(props) {
  const [state, setState] = useState({
    chatItems: [],
    userMessage: { id: "user", msg: "", image: "" },
  });

  const onStateChange = (e) => {
    setState({
      ...state,
      userMessage: { ...state.userMessage, msg: e.target.value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userMessage, chatItems } = state;
    try {
      setState({
        ...state,
        userMessage: { ...state.userMessage, msg: "" },
        chatItems: [...chatItems, userMessage],
      });
      const { data } = await axios.get("/get", {
        params: { message: userMessage.msg },
      });
      setState({
        ...state,
        userMessage: { ...state.userMessage, msg: "" },
        chatItems: [
          ...chatItems,
          userMessage,
          { msg: data, id: "bot", image: Inglesias },
        ],
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.main__chatcontent}>
      <div className={styles.content__header}>
        <div className={styles.blocks}>
          <div className={styles["current-chatting-user"]}>
            <Avatar styles={styles} isOnline="active" image={Bot} />
            <p>Raul Inglesias</p>
          </div>
        </div>

        <div className={styles.blocks}>
          <div className={styles.settings}>
            <button className={styles["btn-nobg"]}>
              <BiCog size={20} />
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
                key={index}
                user={itm.id}
                msg={itm.msg}
                image={itm.id === "user" ? User : Bot}
              />
            );
          })}
          <div />
        </div>
      </div>
      <div className={styles.content__footer}>
        <div className={styles.sendNewMessage}>
          {/* <button className={styles.addFiles}>
            <BiPlus size={20} disabled={true} />
          </button> */}
          <input
            type="text"
            placeholder="Type a message here"
            onChange={onStateChange}
            value={state.userMessage.msg}
          />
          <button
            className={styles.btnSendMsg}
            id="sendMsgBtn"
            onClick={handleSubmit}
          >
            <BiPaperPlane size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
