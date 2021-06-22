import React from "react";
import Bot from "../../public/assets/raul_bot.png";
import ChatForm from "./ChatForm.jsx";

export default function ChatBot() {
  return (
    <div>
      <section className="bot">
        <img src={Bot} />
      </section>
      <ChatForm />
    </div>
  );
}
