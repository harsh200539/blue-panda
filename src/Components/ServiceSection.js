import React, { useEffect, useState } from 'react';
import "../Assets/ServiceSection.css"
import { siteService } from '../services/api';
import graphicDesign from '../Images/graphic_design.png';
import uiUxDesign from '../Images/ui_ux_design.png';
import socialMedia from '../Images/social_media.png';
import videoEditing from '../Images/video_editing.png';
import webDevelopment from '../Images/web_development.png';
const ServicesSection = () => {
  const fallbackServices = [
    {
      title: "Graphic Designing",
      description: "Creative Visuals That Define Your Brand And Attract The Right Audience.",
      iconUrl: graphicDesign // Replace with your actual image URL
    },
    {
      title: "UI/UX Designing",
      description: "Designing Interfaces That Shape Your Brand And Connect With Your Audience.",
      iconUrl: uiUxDesign // Replace with your actual image URL
    },
    {
      title: "Social Media Marketing",
      description: "Build Awareness, Grow Followers, And Boost Engagement Across All Platforms",
      iconUrl: socialMedia // Replace with your actual image URL
    },
    {
      title: "Video Editing",
      description: "Turn Raw Footage Into Powerful Stories That Capture Attention And Emotion.",
      iconUrl: videoEditing // Replace with your actual image URL
    },
    {
      title: "Website Development",
      description: "Building Websites That Elevate Your Brand And Engage The Right Audience.",
      iconUrl: webDevelopment // Replace with your actual image URL
    }
  ];
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    siteService.getServices()
      .then((response) => {
        const apiServices = response.data.results || response.data;
        if (apiServices.length) {
          setServices(apiServices.map((service, index) => ({
            ...service,
            iconUrl: service.image || service.image_url || fallbackServices[index]?.iconUrl,
          })));
        }
      })
      .catch((error) => console.error('Error fetching services:', error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title" data-aos="fade-up" data-aos-duration="800">
          Marketing Excellence That Moves<br />Your Brand Forward
        </h2>
        
        <div className="services-grid">
          <div className="services-row row-top">
            {services.slice(0, 2).map((service, index) => (
              <div key={index} className="service-card" data-aos="zoom-in" data-aos-delay={index * 100} data-aos-duration="700">
                <div className="service-icon-wrapper">
                  <img src={service.iconUrl || "/placeholder.svg"} alt={service.title} className="service-icon-img" />
                </div>
                <div className="service-content">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="services-row row-bottom">
            {services.slice(2).map((service, index) => (
              <div key={index + 2} className="service-card" data-aos="zoom-in" data-aos-delay={(index + 2) * 100} data-aos-duration="700">
                <div className="service-icon-wrapper">
                  <img src={service.iconUrl || "/placeholder.svg"} alt={service.title} className="service-icon-img" />
                </div>
                <div className="service-content">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="services-button" data-aos="fade-up" data-aos-delay="500" data-aos-duration="700">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export { ServicesSection };

