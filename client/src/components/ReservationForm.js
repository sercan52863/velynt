import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const ReservationForm = () => {
  const [pickup, setPickup] = useState("435 Oakwood Ln, San Francisco, CA");
  const [dropoff, setDropoff] = useState("798 Maple Ave., San Francisco, CA");
  const [date, setDate] = useState(new Date());
  const [vehicleType, setVehicleType] = useState("sedan");

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to backend
  };

  return (
    <div className="luxury-form">
      <h2>Reserve a Luxury Ride</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pickup Address</label>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Drop-off Location</label>
          <input
            type="text"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Select Date & Time</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>

        <div className="vehicle-selection">
          <h3>Choose Your Vehicle</h3>
          <div className="vehicle-card" onClick={() => setVehicleType("sedan")}>
            <h4>Lincoln MKT Sedan</h4>
            <p className="price">$120/hour</p>
            {vehicleType === "sedan" && <div className="selected-badge">✓</div>}
          </div>
          
          <div className="vehicle-card" onClick={() => setVehicleType("suv")}>
            <h4>Premium SUV</h4>
            <p className="price">$200/hour</p>
            {vehicleType === "suv" && <div className="selected-badge">✓</div>}
          </div>
        </div>

        <button type="submit" className="cta-button">
          Request Ride
        </button>
      </form>
    </div>
  );
};
