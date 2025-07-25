import React from "react";
import Hero from "./components/landing-page/hero";
import About from "./components/landing-page/About";
import "./page.css"; // Import page-specific styles

// Use the video file as a static asset by referencing its path directly in the video tag
import "./page.css";



const AboutPage = () => {
  return (
    <div className="wrapper">
      <Hero />
      <About />
    </div>
  );
};

export default AboutPage;
