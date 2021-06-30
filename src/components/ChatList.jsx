import React, { useState } from "react";
import ChatListItems from "./ChatListItems.jsx";
import { BiSearch, BiPlus } from "react-icons/bi";
import { AiOutlineEllipsis } from "react-icons/ai";
import InglesiasImage from "../../public/assets/inglesias.png";
import TableImage from "../../public/assets/table.png";
import styles from "../../styles/ChatList.css";
import { useSelector } from "react-redux";

export default function ChatList(props) {
  const { currentBot } = useSelector((state) => state.bot);
  let allChatUsers = [
    {
      image: InglesiasImage,
      id: 1,
      name: "Raul Inglesias",
      active: true,
      isOnline: true,
    },
    {
      image: TableImage,
      id: 2,
      name: "Raul Table",
      active: true,
      isOnline: true,
    },
  ];

  const [chatUsers, setChatUsers] = useState(allChatUsers);

  return (
    <div className={styles.main__chatlist}>
      {/* <div className={styles.btn_custom}>
        <BiPlus size={20} />
        ask random question
        </div> */}
      <div className={styles.chatlist__heading}>
        <h2>{currentBot === "Raul Inglesias" ? "Chat": "Chingaderas"}</h2>
        <button className={styles["btn-nobg"]}>
          <AiOutlineEllipsis size={20} />
        </button>
      </div>
      <div className={styles.chatList__search}>
        <div className={styles.search_wrap}>
          <input type="text" placeholder="In Development" required />
          <button className={styles["search-btn"]}>
            <BiSearch size={20} />
          </button>
        </div>
      </div>
      <div className={styles.chatlist__items}>
        {chatUsers.map((item, index) => {
          return (
            <ChatListItems
              styles={styles}
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
