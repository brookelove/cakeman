import React from "react";
import "../assets/css/components/About.css";
import UncleJ from "../assets/images/UncleJ.png";
export default function About() {
  return (
    <div id="about" className="aboutContainer">
      <h1 className="aboutTitle">I AM</h1>
      <div className="trifold">
        <img src={UncleJ} width="300" className="uncleJPic" />
        <div className="textContainer">
          <h1 className="coordinates">30.3322° N, 81.6557° W</h1>
          <div className="aboutTextContainer">
          <p className="aboutText">YOU THINK IT I CAN MAKE IT</p>
          <p className="aboutText">CALL OR TEXT TO INQUIRE ABOUT ORDERS</p>
          </div>
          <a href="mailto:chefnolove83@gmail.com" className="link">
            chefnolove83@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
