import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Pearls Mehndi Studio</h2>
          <p>Bringing beautiful mehndi art to your special moments.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@mehndhi.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Tamil Nadu, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Pearls Mehndi Studio. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;