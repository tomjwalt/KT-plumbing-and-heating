import { useState } from "react";
import "./App.css";
import TitlePieceCropped from "./assets/title-piece-cropped.jpg";
import Logo from "./assets/logo.jpg";

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="title-piece">
          <img src={TitlePieceCropped} alt="title-piece-cropped" />
        </div>
      </div>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <div className="contact">
          <h2 className="contact-number">07815717407</h2>
          <h2 className="contact-email">kyletomlinson@gmail.com</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
