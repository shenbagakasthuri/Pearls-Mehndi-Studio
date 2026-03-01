import "../styles/about.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Our Mehndi Services</h1>

      <p>
        We provide professional mehndi artists for weddings, engagements,
        baby showers and special occasions. Our designs range from traditional
        bridal styles to modern minimal patterns.
      </p>

      <div className="about-cards">
        <div className="card">
          <h3>Bridal Mehndi</h3>
          <p>Elegant and detailed bridal designs for your big day.</p>
        </div>

        <div className="card">
          <h3>Engagement</h3>
          <p>Stylish and simple designs perfect for engagement events.</p>
        </div>

        <div className="card">
          <h3>Festival Special</h3>
          <p>Beautiful mehndi patterns for festive celebrations.</p>
        </div>
      </div>
    </div>
  );
}

export default About;