import React from "react";
import Hero from "./components/landing-page/hero";
import About from "./components/landing-page/About";

// Use the video file as a static asset by referencing its path directly in the video tag
import "./page.css";



const AboutPage = () => {
  return (
    <div>
      <Hero />
      <About />       
    </div>
  );
};

export default AboutPage;
