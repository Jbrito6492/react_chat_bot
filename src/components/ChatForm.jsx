import React, { useState } from "react";
import axios from "axios";

export default function ChatForm() {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("/get", { params: { message } });
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setMessage("");
    }
  };

  return (
    <div className="form-floating mb-3">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={message}/>
      </form>
    </div>
  );
}
