import "../Assets/SocialMediaSection.css";
import facebook from "../Images/fb.png";
import youtube from "../Images/youtube.png";
import instagram from "../Images/Instagram.png";
import pinterest from "../Images/pinterest.png";
import sitPanda from "../Images/panda_sit.png";


export function SocialMediaSection() {
  return (
    <section className="sm-section">
      <div className="sm-container">
        <div className="sm-header">
          <span className="sm-subtitle" data-aos="fade-up" data-aos-duration="700">Our Services</span>
          <h2 className="sm-title" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">Social Media Mastery</h2>
        </div>

        <div className="sm-content">
          {/* Central Image with Glow */}
          <div className="sm-central-image-container" data-aos="fade-up" data-aos-duration="500">
            <div className="sm-glow-effect"></div>
            <img src={sitPanda} alt="Social Media Mastery Mascot" className="sm-central-character" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" />
          </div>

          {/* Service Items */}
          <div className="sm-services-grid">
            {/* Facebook - Top Left */}
            <div className="sm-service-item sm-top-left" data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">
              <div className="sm-service-icon-wrapper">
                <img src={facebook} alt="Facebook" className="sm-service-icon" />
              </div>
              <h3 className="sm-service-title">Facebook Marketing</h3>
              <p className="sm-service-description">
                Grow Your Audience With Smart, Targeted Facebook Ads And Engaging Posts That Build Visibility, Trust,
                And Genuine Customer Connections.
              </p>
            </div>

            {/* Youtube - Top Right */}
            <div className="sm-service-item sm-top-right" data-aos="fade-up" data-aos-delay="400" data-aos-duration="700">
              <div className="sm-service-icon-wrapper">
                <img src={youtube} alt="Youtube" className="sm-service-icon" />
              </div>
              <h3 className="sm-service-title">Youtube Marketing</h3>
              <p className="sm-service-description">
                Boost Your Brand With Creative Videos, Optimized Content, And Strategies That Increase Views,
                Subscribers, And Long-Term Engagement.
              </p>
            </div>

            {/* Instagram - Bottom Left */}
            <div className="sm-service-item sm-bottom-left" data-aos="fade-up" data-aos-delay="500" data-aos-duration="700">
              <div className="sm-service-icon-wrapper">
                <img src={instagram} alt="Instagram" className="sm-service-icon" />
              </div>
              <h3 className="sm-service-title">Instagram Marketing</h3>
              <p className="sm-service-description">
                Show Your Brand's Personality Through Stunning Visuals, Reels, And Stories Designed To Drive Real
                Engagement And Lasting Followers.
              </p>
            </div>

            {/* Pinterest - Bottom Right */}
            <div className="sm-service-item sm-bottom-right"
              data-aos="fade-up"
              data-aos-delay="600" data-aos-duration="700">
              <div className="sm-service-icon-wrapper">
                <img src={pinterest} alt="Pinterest" className="sm-service-icon" />
              </div>
              <h3 className="sm-service-title">Pinterest Marketing</h3>
              <p className="sm-service-description">
                Turn Ideas Into Action With Curated Pins And Boards That Inspire, Attract Traffic, And Turn Viewers Into
                Loyal Customers.
              </p>
            </div>
          </div>
        </div>

        <div className="sm-footer">
          <button className="sm-get-started-btn" data-aos="fade-up" data-aos-delay="700" data-aos-duration="700">GET STARTED</button>
        </div>
      </div>
    </section>
  )
}
