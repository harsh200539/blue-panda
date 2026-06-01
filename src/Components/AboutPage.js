import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navbar />
      <AboutSection1 />
      <AboutSection2 />
      <Footer />
    </div>
  );
};

export default AboutPage;

