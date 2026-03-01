import "../styles/home.css";
import { Link } from "react-router-dom";
import img1 from "../assets/images/mehndi1.webp";
import img2 from "../assets/images/mehndi2.jpg";
import img3 from "../assets/images/mehndi3.jpg";
import img4 from "../assets/images/mehndi4.jpeg";
import img5 from "../assets/images/mehndi5.jpg";
import img6 from "../assets/images/mehndi6.jpg";
import img7 from "../assets/images/mehndi7.jpg";
import img8 from "../assets/images/mehndi8.jpeg";
import img9 from "../assets/images/mehndi9.jpg";


function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">
      <div className="hero-content">
        <h1>Bringing Art to Your Hands</h1>
        <p>Premium Bridal & Occasion Mehndi Services</p>

        <div className="hero-buttons">
          <Link to="/booking" className="btn-primary">Book Now</Link>
          <a href="#gallery" className="btn-outline">View Gallery</a>
        </div>
      </div>
    </div>

      
      {/* SERVICES */}
<section className="services">
  <h2 className="section-title">Our Services</h2>

  <div className="service-cards">

    <div className="service-card">
      <div className="service-icon">👰</div>
      <h3>Bridal Mehndi</h3>
      <p>Exclusive and intricate bridal designs crafted with perfection.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">💍</div>
      <h3>Engagement Mehndi</h3>
      <p>Elegant and trendy patterns for your special engagement day.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">🎉</div>
      <h3>Festival Designs</h3>
      <p>Beautiful festive mehndi designs for every celebration.</p>
    </div>

  </div>
</section>

      {/* GALLERY */}
      <section className="gallery" id="gallery">
        <h2>Our Gallery</h2>
        <div className="gallery-grid">
          <img src={img1} alt="mehndi design" />
          <img src={img2} alt="mehndi design" />
          <img src={img3} alt="mehndi design" />
          <img src={img4} alt="mehndi design" />
          <img src={img5} alt="mehndi design" />
          <img src={img6} alt="mehndi design" />
          <img src={img7} alt="mehndi design" />
          <img src={img8} alt="mehndi design" />
          <img src={img9} alt="mehndi design" />

        </div>
      </section>

      {/* WHY CHOOSE US */}
<section className="why">
  <h2 className="section-title">Why Choose Us?</h2>

  <div className="why-cards">

    <div className="why-card">
      <div className="why-icon">🎨</div>
      <h3>Experienced Artists</h3>
      <p>Skilled professionals with years of bridal and event experience.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">🌿</div>
      <h3>Natural Henna</h3>
      <p>We use 100% natural and skin-safe henna for deep rich color.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">✨</div>
      <h3>Custom Designs</h3>
      <p>Personalized patterns tailored to your style and occasion.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">💰</div>
      <h3>Affordable Packages</h3>
      <p>Premium quality service at competitive and flexible pricing.</p>
    </div>

  </div>
</section>

    </div>
  );
}

export default Home;