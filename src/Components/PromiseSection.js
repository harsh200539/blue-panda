import "../Assets/PromiseSection.css";
import pandaHelp from "../Images/panda_help.png";
export const PromiseSection = () => {
  return (
    <section className="promise-section">
      <div className="promise-container">
        <div className="promise-header-mobile">
          <h3 className="promise-subtitle">Our Promise</h3>
        </div>

        <div className="promise-content-wrapper">
          <div className="promise-image-column" data-aos="fade-up" data-aos-duration="1000">
            <img
              src={pandaHelp}
              alt="Friendly Panda Waving"
              className="promise-panda-img"
            />
          </div>

          <div className="promise-text-column">
            <div className="promise-card">
              <h3 className="promise-subtitle-desktop">Our Promise</h3>
              <h2 className="promise-title">
                We Help You To Grow Faster And Better
              </h2>
              <p className="promise-description">
                We Build Strategies That Move With Purpose, Combining Insight,
                Execution, And Analysis To Help Your Business Grow With Clarity
                And Confidence.
              </p>

              <div className="promise-features">
                <div className="promise-feature-item" 
                data-aos="fade-up" 
                data-aos-delay="100" data-aos-duration="700">
                  <div className="promise-feature-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 3V21H21"
                        stroke="#1e3a8a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M18 9L13.5 13.5L9 9L18 9Z" fill="#1e3a8a" />
                      <path
                        d="M18 9L13.5 13.5L9 9"
                        stroke="#1e3a8a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 17L18 6"
                        stroke="#1e3a8a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="promise-feature-content">
                    <h4 className="promise-feature-title">Strategy Driven</h4>
                    <p className="promise-feature-desc">
                      We Create Focused Strategies Built On Data, Creativity,
                      And Measurable Goals, Helping Your Brand Grow Faster And
                      Smarter.
                    </p>
                  </div>
                </div>

                <div className="promise-feature-item">
                  <div className="promise-feature-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="11"
                        cy="11"
                        r="8"
                        stroke="#1e3a8a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 21L16.65 16.65"
                        stroke="#1e3a8a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="promise-feature-content" >
                    <h4 className="promise-feature-title">
                      Research, execution
                    </h4>
                    <p className="promise-feature-desc">
                      From Market Trends To Real-Time Performance, We Dive Deep,
                      Test Ideas, And Execute Plans That Deliver Tangible
                      Results.
                    </p>
                  </div>
                </div>

                <div className="promise-feature-item">
                  <div className="promise-feature-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 20V10"
                        stroke="#1e3a8a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 20V4"
                        stroke="#1e3a8a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 20V14"
                        stroke="#1e3a8a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="promise-feature-content"  >
                    <h4 className="promise-feature-title">Root Analysis</h4>
                    <p className="promise-feature-desc">
                      We Identify The Core Challenges Behind Your Business
                      Hurdles And Design Solutions That Ensure Lasting Success.
                    </p>
                  </div>
                </div>
              </div>

              <button className="promise-btn">GET STARTED</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
