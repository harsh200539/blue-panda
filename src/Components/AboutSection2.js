import React from "react";
import "../Assets/AboutPage.css";
import socialMediaImage from "../Images/social-media-event.jpg";

const AboutSection2 = () => {
  const services = [
    {
      id: 1,
      title: "Social Media",
      description: "We Build Engaging Social Media Identities That Keep Your Audience Connected And Your Brand Top-Of-Mind.",
      image: socialMediaImage,
      imagePosition: "left"
    },
    {
      id: 2,
      title: "Design",
      description: "From Branding To Creatives, We Craft Visuals That Speak For You And Leave A Lasting Impression.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      imagePosition: "right"
    },
    {
      id: 3,
      title: "UI/UX",
      description: "We Design Seamless, User-Friendly Digital Experiences That Feel Intuitive And Elevate Every Interaction.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=300&fit=crop",
      imagePosition: "left"
    },
    {
      id: 4,
      title: "Videos",
      description: "High-Quality, Story-Driven Videos That Bring Your Brand To Life And Make People Stop, Watch, And Remember.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      imagePosition: "right"
    },
    {
      id: 5,
      title: "SEO",
      description: "We Optimize Your Digital Presence So Your Brand Gets Discovered, Ranked, And Trusted.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop",
      imagePosition: "left"
    },
    {
      id: 6,
      title: "Ads & Influencers",
      description: "Smart Campaigns + The Right Voices. We Amplify Reach Through Targeted Ads And Authentic Influencer Collaborations.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      imagePosition: "right"
    }
  ];

  return (
    <section className="about-section-2 mt-md-5" id="what-we-do">
      <div className="container">
        <h2 className="section-2-title" data-aos="fade-up" data-aos-duration="800">
          What We Do
        </h2>
        <p className="section-2-subtitle" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
          At Blue Panda, We Turn Ideas Into Digital Experiences That Connect, Convert, And Create
          Long-Term Impact. By Blending Creativity With Strategy, We Help Brands Express Who
          They Are And Reach The People Who Matter Most.
        </p>

        <div className="services-container">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="row service-row align-items-center mb-5"
              data-aos={service.imagePosition === "left" ? "fade-up" : "fade-up"}
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              {/* Always render content first in HTML for mobile-first approach */}
              <div className={`col-12 col-md-6 ${service.imagePosition === 'right' ? 'order-md-1' : 'order-md-2'}`}>
                <div className="service-content">
                  <span className="service-number">0{index + 1}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
              
              {/* Image second in HTML, reordered on desktop with Bootstrap order classes */}
              <div className={`col-12 col-md-6 ${service.imagePosition === 'right' ? 'order-md-2' : 'order-md-1'}`}>
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;
