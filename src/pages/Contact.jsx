import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you ❤️</p>
      </div>

      {/* CONTACT INFO CARDS */}
      <div className="contact-info">

        <div className="info-card">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="info-card">
          <h3>📧 Email</h3>
          <p>info@mehndhi.com</p>
        </div>

        <div className="info-card">
          <h3>📍 Location</h3>
          <p>Tamil Nadu, India</p>
        </div>

      </div>

      {/* FORM */}
      <div className="contact-form-section">
        <h2>Send a Message</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* MAP */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?..."
          title="map"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}

export default Contact;