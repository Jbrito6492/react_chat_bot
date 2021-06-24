
import React from "react";
import ChatList from "./ChatList.jsx";
import ChatContent from "./ChatContent.jsx";
import UserProfile from "./UserProfile.jsx";
import styles from "../../styles/ChatBody.css";

export default function ChatBody(props) {
    return (
      <div className={styles.main__chatbody}>
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
    );
}