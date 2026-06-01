import "../Assets/StatsSection.css"

export const StatsSection = () => {
  const stats = [
    {
      number: "350+",
      label: "Project Done",
    },
    {
      number: "25+",
      label: "Expert Team",
    },
    {
      number: "200+",
      label: "Satisfied Client",
    },
    {
      number: "150+",
      label: "User Active",
    },
  ]

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title" data-aos="fade-up" data-aos-duration="800">Trusted By 200+ Happy Client</h2>
          <p className="stats-description" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            At Blue Panda, We Believe The Customer Comes First. Every Piece Of Land We Develop Reflects Our Commitment
            To Quality, Trust, And Long-Term Value.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" data-aos="flip-up" data-aos-delay={index * 100} data-aos-duration="600">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

