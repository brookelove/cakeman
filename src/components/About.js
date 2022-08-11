import React from "react";
import "../assets/css/components/About.css";
import UncleJ from "../assets/images/UncleJ.png";
export default function About() {
  return (
    <div id="about" className="aboutContainer">
      {/* <h1 >
        CAKE MAN
      </h1> */}
      <div className="trifold">
        <img src={UncleJ} width="300" className="uncleJPic" />
        <div className="textContainer">
          <h1 className="aboutTitle">About the Cake Man</h1> 
          <p className="aboutText">
            I am a one man machine that creates any cake that creates new
            inventive deserts.
          </p>
          <p className="aboutText">If you can think it I can do it!</p>
          <p>Based out of Florida</p>
        </div>
      </div>
    </div>
  );
}
