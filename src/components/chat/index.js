import React from "react";
import "react-chat-widget/lib/styles.css";
import API from "../../config/api";

import { Widget, addResponseMessage } from "react-chat-widget";

import avatar from "../../Assets/klubbot_16-9.png";

function Chat() {
  const handleNewUserMessage = async newMessage => {
    const response = await API.post("/log", { pergunta: newMessage });

    addResponseMessage(response.resposta);
  };

  return (
    <Widget
      title="Robozinho"
      subtitle="Vamos conversar?"
      handleNewUserMessage={handleNewUserMessage}
      profileAvatar={avatar}
      senderPlaceHolder="Envie uma mensagem"
    />
  );
}

export default Chat;
