import { useEffect, useState } from "react";
import "../Assets/TestimonialsSection.css";
import { siteService } from "../services/api";

const TestimonialsSection = () => {
  const fallbackTestimonials = [
    {
      id: 1,
      title: "It was a very good experience",
      text: "The customer is very important, the customer will be followed by the customer. Cursus nibh mauris, nor turpis orci lectus maecenas. But it needs a great deal of attention in the school.",
    },
    {
      id: 2,
      title: "It was a very good experience",
      text: "The customer is very important, the customer will be followed by the customer. Cursus nibh mauris, nor turpis orci lectus maecenas. But it needs a great deal of attention in the school.",
    },
    {
      id: 3,
      title: "It was a very good experience",
      text: "The customer is very important, the customer will be followed by the customer. Cursus nibh mauris, nor turpis orci lectus maecenas. But it needs a great deal of attention in the school.",
    },
  ]
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);

  useEffect(() => {
    siteService.getTestimonials()
      .then((response) => {
        const apiTestimonials = response.data.results || response.data;
        if (apiTestimonials.length) setTestimonials(apiTestimonials);
      })
      .catch((error) => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h3 className="testimonials-subtitle" data-aos="fade-up" data-aos-duration="700">Our Services</h3>
          <h2 className="testimonials-title" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">People Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={item.id} className="testimonial-card" data-aos="zoom-in" data-aos-delay={index * 100} data-aos-duration="600">
              <h3 className="testimonial-card-title">{item.name || item.title}</h3>
              {item.position && <span className="testimonial-position">{item.position}</span>}
              <p className="testimonial-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { TestimonialsSection }
