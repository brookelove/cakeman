import React from "react";
import { FaInstagramSquare, FaPhoneSlash } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import "../assets/css/components/Footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footerContainer">
      <div className="footerContext">
        <li className="footerList">
          <a
            href="https://cash.app/$ChefNoLove"
            target={"_blank"}
            className="link"
          >
            <SiCashapp />
          </a>
        </li>
        <li className="footerList">
          <a href="tel: 904-878-5883" className="link">
            <FaPhoneSlash />
          </a>
        </li>
        <li className="footerList">
          <a
            href="https://www.instagram.com/chefnolove/?hl=en"
            target={"_blank"}
            className="link"
          >
            <FaInstagramSquare />
          </a>
        </li>
        <li className="footerList">
          <a href="mailto:chefnolove83@gmail.com" className="link">
            chefnolove83@gmail.com
          </a>
        </li>
        <li className="footerList">
          <a href="#navbar" className="link">
            ^ Back to Top
          </a>
        </li>
      </div>
  
    </footer>
  );
}
