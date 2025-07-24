import React from "react";
import Navbar from "../components/landing-page/Navbar";
import Hero from "../components/landing-page/Hero";
import About from "../components/landing-page/About";

// Use the video file as a static asset by referencing its path directly in the video tag
import "./page.css";
import "../index.css"; 


const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />       
    </div>
  );
};

export default AboutPage;
