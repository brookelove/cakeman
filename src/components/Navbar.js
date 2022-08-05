import React from "react";

export default function Navbar() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <h3>
        <a>Instagram</a>
      </h3>
      <h3>
        <a>Cash App</a>
      </h3>
      <h3>
        <a>Cake Man</a>
      </h3>
      <h3>
        <a>About</a>
      </h3>
      <h3>
        <a>Products</a>
      </h3>
      <h3>
        <a>Contact</a>
      </h3>
      <input type="checkbox" checked={checked} onChange={handleChange} />
    </div>
  );
}
