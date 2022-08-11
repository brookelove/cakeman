import React from "react";
import "../assets/css/components/Navbar.css";
import { FaInstagramSquare } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";

export default function Navbar() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <nav className="navbarContainer"id="navbar">
      <ul className="navbarContext" >
        <li className="listElement">
          <a
            className="link"
            href="https://www.instagram.com/chefnolove/?hl=en"
          >
            <FaInstagramSquare />
          </a>
        </li>
        <li className="listElement">
          <a className="link" href="https://cash.app/$ChefNoLove">
            <SiCashapp />
          </a>
        </li>
        <li className="listElement">
          <a href="#about" className="link">
            About
          </a>
        </li>
        <li className="listElement">
          <a href="#products" className="link">
            Deserts
          </a>
        </li>
        <li className="listElement">
          <a href="#contact" className="link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
