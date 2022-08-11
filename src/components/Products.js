import React from "react";
import "../assets/css/components/Products.css";
import Henessy from "../assets/images/hennesy.png";
import sixcupcakes from "../assets/images/6cupcakes.png";
import sixcupcakes2 from "../assets/images/6cupcakes2.png";
import gucciShoe from "../assets/images/gucciShoe.png";
import manyCupcakes from "../assets/images/manyCupcakes.png";
import Queen from "../assets/images/crownQueen.png";

export default function Products() {
  return (
    <div className="productContainer">
      {/* <h1 id="products">Products</h1> */}
      <div className="flexContent">
        <div className="gridContainer">
          <div className="grid-item">
            <img
              src={sixcupcakes}
              alt="images"
              width="270"
              className="scale6cupcakes"
            />
          </div>
          <div className="grid-item">
            <img src={Henessy} alt="images" width="270" />
          </div>

          <div className="grid-item">
            <img src={sixcupcakes2} alt="images" width="270" />
          </div>
          <div className="grid-item">
            <img src={gucciShoe} alt="images" width="270" />
          </div>
          <div className="grid-item">
            <img
              src={manyCupcakes}
              alt="images"
              width="270"
              className="manyCupcakesScale"
            />
          </div>
          <div className="grid-item">
            <img src={Queen} alt="images" width="270" />
          </div>
        </div>
      </div>
    </div>
  );
}
