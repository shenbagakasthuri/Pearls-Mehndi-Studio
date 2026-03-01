import { useState } from "react";
import "../styles/booking.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date || !formData.event) {
      alert("Please fill all fields");
      return;
    }

    alert("Booking submitted successfully!");
    setFormData({
      name: "",
      phone: "",
      date: "",
      event: "",
    });
  };

  return (
    <div className="booking-wrapper">
      <div className="booking-card">
        <h2>Book Mehandi Artist</h2>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Event Type</label>
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
            >
              <option value="">Select Event</option>
              <option value="Bridal">Bridal</option>
              <option value="Engagement">Engagement</option>
              <option value="Festival">Festival</option>
            </select>
          </div>

          <div className="input-group">
            <label>Event Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="booking-btn">
            Confirm Booking
          </button>

        </form>
      </div>
    </div>
  );
}

export default Booking;