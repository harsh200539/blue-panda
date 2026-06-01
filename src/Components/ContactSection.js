import React from "react";
import "../Assets/ContactSection.css"

export const ContactSection = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-card">
        {/* Left Side - Panda Illustration */}
        <div className="contact-panda" data-aos="fade-up" data-aos-duration="1000">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Panda%204-wCtsPOt529MJdScuYQaKB21eL4xe80.png"
            alt="Panda Mascot"
            className="panda-image"
          />
        </div>

        {/* Center - Contact Information */}
        <div className="contact-info">
          <h2 className="contact-title" data-aos="fade-up" data-aos-duration="800">
            Have A Question
            <br />
            Your Mind
          </h2>

          <div className="contact-details">
            <div className="contact-item" data-aos="fade-up" data-aos-delay="100" data-aos-duration="700">
              <div className="flex_contact">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3.33333 3.33334H16.6667C17.5833 3.33334 18.3333 4.08334 18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 16.6667 1.66667 15.9167 1.66667 15V5.00001C1.66667 4.08334 2.41667 3.33334 3.33333 3.33334Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3333 5L10 10.8333L1.66667 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Email</h3>
              </div>
              <div className="contact-text">
                <p>bluepandamarketing30@gmail.com</p>
              </div>
            </div>

            <div className="contact-item" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
              <div className="flex_contact">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1112 17.2006 18.1856C16.9808 18.26 16.7478 18.2876 16.5167 18.2667C13.9523 17.988 11.489 17.1118 9.32499 15.7084C7.31151 14.4289 5.60443 12.7218 4.32499 10.7084C2.91663 8.53438 2.04019 6.05916 1.76666 3.48337C1.74583 3.25293 1.77321 3.02069 1.84707 2.80139C1.92092 2.58209 2.03963 2.38061 2.19562 2.2098C2.35162 2.03899 2.54149 1.90232 2.75314 1.80881C2.9648 1.7153 3.1936 1.66692 3.42499 1.66671H5.92499C6.32953 1.66273 6.72148 1.80593 7.028 2.06966C7.33452 2.33339 7.53155 2.69958 7.58332 3.10004C7.68011 3.90007 7.86283 4.68562 8.12832 5.44171C8.24088 5.74 8.26741 6.06413 8.20512 6.37716C8.14283 6.69019 7.99408 6.97945 7.77499 7.21337L6.74166 8.24671C7.92795 10.3362 9.66409 12.0724 11.7533 13.2584L12.7867 12.225C13.0206 12.0059 13.3098 11.8572 13.6229 11.7949C13.9359 11.7326 14.26 11.7591 14.5583 11.8717C15.3144 12.1372 16.1 12.3199 16.9 12.4167C17.3048 12.4688 17.6745 12.6694 17.9388 12.9813C18.2032 13.2932 18.3435 13.6914 18.3333 14.1Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Phone</h3>
              </div>
              <div className="contact-text">
                <p>+91 99093 98542</p>
              </div>
            </div>

            <div className="contact-item" data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">
              <div className="flex_contact">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M17.5 8.33334C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33334C2.5 6.34421 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833344 10 0.833344C11.9891 0.833344 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34421 17.5 8.33334Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.8333C11.3807 10.8333 12.5 9.71406 12.5 8.33334C12.5 6.95263 11.3807 5.83334 10 5.83334C8.61929 5.83334 7.5 6.95263 7.5 8.33334C7.5 9.71406 8.61929 10.8333 10 10.8333Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Location</h3>
              </div>
              <div className="contact-text">
                <p>Vadodara, Gujarat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form" 
        data-aos="fade-up"
         data-aos-duration="1000">
          <h3 className="form-title">Join Us Today</h3>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              required
            />
            <textarea
              placeholder="Message"
              className="form-textarea"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="form-button">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
