// components/AboutSection.tsx
import React from "react";
import Image from "../../assets/images/laptop-img.svg";

const AboutSection = () => {
  return (
    <div className="about-section">
      <h2>About Us</h2>
      <div className="about-content">
        <p>
          TXUML is an interactive map that highlights the locations of all
          underground abandoned or active coal mines in the state of Texas since
          the late 1800s.
        </p>
        <div className="image-container">
          <img src={Image.src} alt="TXUML Map Illustration" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
