import { useState } from "react";
import "./App.css";
import TitlePieceCropped from "./assets/title-piece-cropped.jpg";
import Logo from "./assets/logo.jpg";

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="title-piece">
          <img
            classname="title-piece-img"
            src={TitlePieceCropped}
            alt="title-piece-cropped"
          />
        </div>
      </div>
      <div className="container">
        <div className="about-me">
          <h2> About Me </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="my-services">
          <h2>My services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure <b/>dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>

      <div>
        <div className="contact">
          <h2 className="contact-number">07815717407</h2>
          <h2 className="contact-email">kyletomlinson98@gmail.com</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
