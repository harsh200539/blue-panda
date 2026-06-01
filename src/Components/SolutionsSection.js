import "../Assets/SolutionsSection.css"

const solutions = [
  {
    title: "Digital Marketing",
    items: [
      "Search Engine Optimization",
      "Google Business Listing SEO",
      "Personalized Meta Ads",
      "Targeted Google Ads",
    ],
    theme: "light",
  },
  {
    title: "Graphic Designer",
    items: ["Graphic Designing", "Logo Designing", "Social Media Post Design", "Packaging Design"],
    theme: "dark",
  },
  {
    title: "Video Editing",
    items: ["Short Videos (Reels, Shorts)", "Motion Videos & Animation", "Explainer Videos", "Products Tutorials"],
    theme: "light",
  },
]

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="check-icon"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

export const SolutionsSection = () => {
  return (
    <section className="solutions-section" >
      <div className="solutions-container">
        <h2 className="solutions-title" data-aos="fade-up" data-aos-duration="800">
          Our 360<span className="degree">°</span> Solutions
        </h2>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className={`solution-card ${solution.theme === "dark" ? "card-dark" : "card-light"}`} data-aos="flip-left" data-aos-delay={index * 150} data-aos-duration="700">
              <h3 className="card-title">{solution.title}</h3>
              <ul className="card-list">
                {solution.items.map((item, idx) => (
                  <li key={idx} className="list-item">
                    <span className="icon-wrapper">
                      <CheckIcon />
                    </span>
                    <span className="item-text">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="card-divider"></div>
              <button className="choose-btn">Choose</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
