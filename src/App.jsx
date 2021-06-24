import React from "react";
import Nav from "./components/Nav.jsx";
import ChatBody from "./components/ChatBody.jsx";
import styles from "../styles/App.css";

export default function App() {
  return (
    <div className={styles.__main}>
        <Nav />
        <ChatBody />
    </div>
  );
}
