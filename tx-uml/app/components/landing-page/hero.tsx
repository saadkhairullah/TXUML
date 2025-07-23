import React from "react";
import VideoBg from "./VideoBg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <VideoBg />
      <div className="hero-content">
        <h1>
          Unearth the Data
          <br /> Build with Confidence.
        </h1>
        <p>Every Mine Has a Story. We Map Them All, from Depths to Data.</p>
        <a href="">Get started</a>
      </div>
    </div>
  );
};

export default Hero;