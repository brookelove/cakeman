import React from "react";
import "../assets/css/components/Navbar.css";
export default function Navbar() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="navbarContainer">
      <ul className="navbarContext">
        <li className="listElement">
          <a className="link">Instagram</a>
        </li>
        <li className="listElement">
          <a className="link">Cash App</a>
        </li>
        <li className="listElement">
          <a href="#about" className="link">
            About
          </a>
        </li>
        <li className="listElement">
          <a href="#products" className="link">
            Products
          </a>
        </li>
        <li className="listElement">
          <a href="#contact" className="link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
