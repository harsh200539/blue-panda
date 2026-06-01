import "../Assets/TestimonialsSection.css"

const TestimonialsSection = () => {
  const testimonials = [
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
              <h3 className="testimonial-card-title">{item.title}</h3>
              <p className="testimonial-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { TestimonialsSection }
