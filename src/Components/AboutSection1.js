
import React from "react";
import "../Assets/AboutPage.css";

const AboutSection1 = () => {
  return (
    <section className="about-section-1" id="about-section-1">
      {/* Background decorative orbs */}
      <div className="about-bg-orb orb-1"></div>
      <div className="about-bg-orb orb-2"></div>

      <div className="about-container">

        {/* ── Eyebrow + Title ── */}
        <p className="about-eyebrow" data-aos="fade-up" data-aos-duration="600">Who We Are</p>
        <h1 className="about-title" data-aos="fade-up" data-aos-delay="100" data-aos-duration="700">
          About <span className="about-title-accent">Us</span>
        </h1>

        {/* ── Floating labels + centre image ── */}
        <div className="about-content">

          {/* Instagram */}
          <div className="marketing-label instagram-label" data-aos="fade-right" data-aos-delay="200" data-aos-duration="600">
            <div className="label-icon instagram-icon-bg">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig)" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="url(#ig)" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#e1306c"/>
                <defs>
                  <linearGradient id="ig" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f09433"/>
                    <stop offset="0.25" stopColor="#e6683c"/>
                    <stop offset="0.5" stopColor="#dc2743"/>
                    <stop offset="0.75" stopColor="#cc2366"/>
                    <stop offset="1" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span>Instagram<br />Marketing</span>
          </div>

          {/* Facebook */}
          <div className="marketing-label facebook-label" data-aos="fade-left" data-aos-delay="250" data-aos-duration="600">
            <div className="label-icon facebook-icon-bg">
              <svg viewBox="0 0 24 24" fill="#1877f2" width="20" height="20">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </div>
            <span>Facebook<br />Marketing</span>
          </div>

          {/* Pinterest */}
          <div className="marketing-label pinterest-label" data-aos="fade-left" data-aos-delay="350" data-aos-duration="600">
            <div className="label-icon pinterest-icon-bg">
              <svg viewBox="0 0 24 24" fill="#bd081c" width="20" height="20">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
            </div>
            <span>Pinterest<br />Marketing</span>
          </div>

          {/* Youtube */}
          <div className="marketing-label youtube-label" data-aos="fade-right" data-aos-delay="300" data-aos-duration="600">
            <div className="label-icon youtube-icon-bg">
              <svg viewBox="0 0 24 24" fill="#ff0000" width="22" height="22">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <span>Youtube<br />Marketing</span>
          </div>

          {/* Centre image */}
          <div className="about-image-wrapper" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="800">
            <div className="about-image-frame">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=600&fit=crop"
                alt="Team collaboration"
                className="about-center-image"
              />
            </div>
            {/* Live badge */}
            <div className="about-live-badge">
              <span className="live-dot"></span> Digital Agency
            </div>
          </div>
        </div>

        {/* ── Description ── */}
        <div className="about-description" data-aos="fade-up" data-aos-delay="400" data-aos-duration="700">
          <div className="about-tagline-wrapper">
            <span className="about-quote-mark">"</span>
            <h2 className="about-tagline">
              Blue Panda Was Born From A Simple Belief — Great Ideas Deserve To Be Seen!
            </h2>
          </div>
          <p className="about-text">
            We started as a small team passionate about creativity, strategy, and storytelling,
            and grew into a digital marketing agency that helps brands shine online.
            For us, every project is a partnership — we dive into your vision, your goals,
            and your story. At Blue Panda, we turn ideas into impact and connections into lasting growth.
          </p>

          {/* Quick stats row */}
          <div className="about-stats-row">
            <div className="about-stat">
              <span className="about-stat-num">50+</span>
              <span className="about-stat-label">Brands Grown</span>
            </div>
            <div className="about-stat-divider"></div>
            <div className="about-stat">
              <span className="about-stat-num">4</span>
              <span className="about-stat-label">Platforms Mastered</span>
            </div>
            <div className="about-stat-divider"></div>
            <div className="about-stat">
              <span className="about-stat-num">3x</span>
              <span className="about-stat-label">Avg. Engagement Lift</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection1;
