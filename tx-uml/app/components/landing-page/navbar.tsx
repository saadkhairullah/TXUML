import React from "react";
import ImageLogo from "../../assets/images/TXUML-logo.svg";

const navbar = () => {
  return (
    <nav className="navbar">
      <a href="" className="logo-name">
        <img src={ImageLogo.src} alt="TXUML Logo" />
        <h3>TXUML</h3>
      </a>
      <div className="nav-links">
        <a href="">Log in</a>
        <a href="">Sign up</a>
      </div>
    </nav>
  );
};

export default navbar;