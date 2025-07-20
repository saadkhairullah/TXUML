import React from "react";
import ImageLogo from "../assets/images/TXUML-logo.svg";
import Image from "../assets/images/laptop-img.svg";
import "./page.css";
import "../index.css"; // Assuming you have a global CSS file for styles

// this is where the about page frontend goes
const Video = () => {
  return (
    <video controls autoPlay muted loop>
      <source src="../assets/introBg.webm" type="video/webm" />
      <source src="../assets/introBg.mp4" type="video/mp4" />
    </video>
  );
};

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
          <Video />
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

    // <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  alignItems: 'center', gap: '3rem' }}>
    //   <h1 className={styles.headerBox}>About TXUML</h1>
    //   <div style={{ display: 'flex', gap: '2rem' }}>
    //     <Image
    //       src={"/images/tunnel1.png"}
    //       alt="Underground Mine Tunnel"
    //       width={240}
    //       height={320}
    //       style={{ borderRadius: '4px' }}
    //     />
    //     <Image
    //       src={"/images/minemap.png"}
    //       alt="Texas Underground Mine Map"
    //       width={320}
    //       height={320}
    //       style={{ borderRadius: '4px' }}
    //     />
    //   </div>
    //   <div>
    //     <p className={styles.textBox}>
    //       TXUML is an interactive map that highlights the
    //       locations of all underground abandoned or active
    //       coal mines in the state of Texas since the late 1800s.
    //     </p>
    //   </div>
    // </div>
  );
};

export default AboutPage;
