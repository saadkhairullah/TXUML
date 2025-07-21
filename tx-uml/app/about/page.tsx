import React from "react";
import ImageLogo from "../assets/images/TXUML-logo.svg";
import Image from "../assets/images/laptop-img.svg";
// Use the video file as a static asset by referencing its path directly in the video tag
import "./page.css";
import "../index.css"; // Assuming you have a global CSS file for styles

// this is where the about page frontend goes
// const Video = () => {
//   return (
//     <video className="video" controls autoPlay muted loop>
//       <source src="../assets/introBg.webm" type="video/webm" />
//       <source src="../assets/introBg.mp4" type="video/mp4" />
//     </video>
//   );
// };

const AboutPage = () => {
  return (
    <div>
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

      <div>
        <div className="hero-section">
          <div className="overlay"></div>
          <video controls autoPlay muted loop className="video">
            <source src="/videos/intro.webm" type="video/webm" />
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-content">
            <h1>
              Unearth the Data
              <br /> Build with Confidence.
            </h1>
            <p>Every Mine Has a Story. We Map Them All, from Depths to Data.</p>
            <a href="">Get started</a>
          </div>
        </div>

        <div className="about-section">
          <h2>About Us</h2>
          <div className="about-content">
            <p>
              TXUML is an interactive map that highlights the locations of all
              underground abandoned or active coal mines in the state of Texas
              since the late 1800s.
            </p>
            <div className="image-container">
              <img src={Image.src} alt="TXUML Logo" />
            </div>
          </div>
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
