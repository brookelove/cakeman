import React from "react";
import { FaInstagramSquare, FaPhoneSlash } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import "../assets/css/components/Footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <h1>Footer</h1>
      <a href="https://cash.app/$ChefNoLove" target={"_blank"}>
        <SiCashapp />
      </a>
      <a href="tel: 904-878-5883">
        <FaPhoneSlash />
      </a>
      <a href="https://www.instagram.com/chefnolove/?hl=en" target={"_blank"}>
        <FaInstagramSquare />
      </a>
      <a href="mailto:chefnolove83@gmail.com">chefnolove83@gmail.com</a>
      <a href="#navbar">^ Back to Top</a>
    </div>
  );
}
