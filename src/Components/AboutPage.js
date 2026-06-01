import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import SEO from "./SEO";
import { seoConfig } from "../config/seo-config";
import { generateOrganizationSchema } from "../utils/schemas";

const AboutPage = () => {
  return (
    <div className="about-page">
      <SEO 
        {...seoConfig.about}
        structuredData={generateOrganizationSchema()}
      />
      <Navbar />
      <AboutSection1 />
      <AboutSection2 />
      <Footer />
    </div>
  );
};

export default AboutPage;

