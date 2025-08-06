import React from "react";
import Hero from "./components/landing-page/hero";
import About from "./components/landing-page/About";


const AboutPage = () => {
  return (
    <main className="wrapper">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
};

export default AboutPage;
