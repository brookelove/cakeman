import React from "react";
import "../assets/css/pages/Landing.css";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import About from "../components/About";
import Footer from "../components/Footer";
import blackAndWhite from "../assets/images/blackAndWhite.png"
export default function Landing() {
  return (
    <div>
      <div className="topContainer">
        <Navbar />
       <div>
        <div className="landingCakeContainer">
        <img src={blackAndWhite} className="landingCake"/>
        </div>
        <h1 className="cakeManTitle">CAKE MAN</h1>
        </div>
      <Products />
      <About />
      <Footer />
    </div>
    </div>
  );
}
