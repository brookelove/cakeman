import React from "react";
import "../assets/css/pages/Landing.css";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
export default function Landing() {
  return (
    <div>
      <div className="topContainer">
        <Navbar />
        <h1 className="cakeManTitle">CAKE MAN</h1>
      </div>
      <Products />
    </div>
  );
}
