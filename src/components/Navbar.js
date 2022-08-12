import React from "react";
import "../assets/css/components/Navbar.css";
import { FaInstagramSquare } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { Link } from "react-scroll";
export default function Navbar() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <nav className="navbarContainer">
      <ul className="navbarContext" id="navbar">
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
          {/* <a href="#about" className="link"> */}
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="link"
          >
            About
          </Link>
          {/* </a> */}
        </li>
        <li className="listElement">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="link"
          >
            Home
          </Link>
        </li>
        <li className="listElement">
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="link"
          >
            Desserts
          </Link>
          {/* <a href="#products" className="link">
            Deserts
          </a> */}
        </li>
        <li className="listElement">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="link"
          >
            Contact
          </Link>
          {/* <a href="#contact" className="link">
            Contact
          </a> */}
        </li>
      </ul>
    </nav>
  );
}
