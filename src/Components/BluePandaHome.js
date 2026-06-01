import React from "react";
import "../Assets/BluePanda.css";
import navLogo from "../Images/blue_panda_logo_white.png";
import Navbar from "./Navbar";
import backgroundVideo from "../Images/Final Video.mp4";



const BluePandaHome = () => {
  return (
    <div className="blue-panda-page " id="home">
      <video autoPlay loop muted playsInline className="hero-bg-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-video-overlay"></div>

     <Navbar />
      <section className="hero-section d-flex align-items-center mt-5">
        <div className="hero-content col-6" data-aos="fade-up" data-aos-duration="1000">
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            Fuel Your Brand’s Growth with Blue Panda
          </h1>
          <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
            At Blue Panda, we help ambitious brands grow faster with bold creativity and powerful digital strategies. From social media to branding and performance campaigns, we deliver smart solutions that turn potential into impact.
          </p>
          
          {/* <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Contact</button>
          </div> */}
        </div>
        <div className="hero-image col-6 text-center">
          <div className="social-icons" data-aos="fade-down" data-aos-delay="600" data-aos-duration="800">
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon facebook-icon" data-aos="zoom-in" data-aos-delay="700" data-aos-duration="500">
              <img src={require("../Images/FaceBook.svg").default} alt="Facebook" />
            </a>
            <a href="# " target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="500">
              <img src={require("../Images/Instagram.svg").default} alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon pinterest-icon" data-aos="zoom-in" data-aos-delay="900" data-aos-duration="500">
              <img src={require("../Images/Pinterest.svg").default} alt="Pinterest" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon youtube-icon" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="500">
              <img src={require("../Images/YouTube.svg").default} alt="YouTube" />
            </a>
          </div>
          {/* Background panda image with opacity and rotation */}
          {/* <img 
            src={require("../Images/s1.png")}
            alt="Background Panda"
            className="panda-background"
            data-aos="fade-up" 
            data-aos-delay="200" 
            data-aos-duration="1000"
          /> */}
          {/* Main panda mascot */}
          <img 
            src={require("../Images/s1.png")}
            alt="Blue Panda Mascot"
            className="panda-main"
            data-aos="zoom-in" 
            data-aos-delay="400" 
            data-aos-duration="1000"
          />
          {/* For social icons, use FontAwesome or similar if you want to add */}
        </div>
      </section>
    </div>
  );
};

export default BluePandaHome;
