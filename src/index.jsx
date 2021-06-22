import React from "react";
import ReactDOM from "react-dom";
import ChatBot from "./components/ChatBox.jsx";
import "@babel/polyfill";

function App() {
  return (
    <div>
      <ChatBot />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
