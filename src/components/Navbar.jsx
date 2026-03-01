
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Pearls Mehndi Studio</div>

      <ul className="nav-links">
        {/* <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/booking">Booking</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li> */}
        <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        <li><NavLink to="/booking" className="nav-link">Booking</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;

