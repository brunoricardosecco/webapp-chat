import React from "react";
import "./app.css";

import Navbar from "./components/navbar";

import Chat from "./components/chat";

import groupReadingPhoto from "./Assets/43122.jpg";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="infoContainer">
          <h1>AnovaDS Lab</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            explicabo natus dolor nostrum officia voluptas culpa, veniam,
            consequuntur laudantium doloremque placeat temporibus labore nulla.
            Nam tempore alias laudantium dolores consequuntur.
          </p>
          <button>Me Inscrever!</button>
        </div>
        <div className="imageContainer">
          <img
            src={groupReadingPhoto}
            alt="studieGroup"
            className="groupReading"
          />
        </div>
      </div>
      <Chat />
    </>
  );
}

export default App;
