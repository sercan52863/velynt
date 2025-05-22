import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const ReservationForm = () => {
  const [pickup, setPickup] = useState("435 Oakwood Ln, San Francisco, CA");
  const [dropoff, setDropoff] = useState("798 Maple Ave., San Francisco, CA");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [vehicle, setVehicle] = useState("sedan");

  return (
    <section className="reservation-section">
      <h2>Rezervasyon Yap</h2>
      <form>
        <div className="form-group">
          <label>Alış Adresi</label>
          <input 
            type="text" 
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
        </div>

        <div className="vehicle-selector">
          <div 
            className={`vehicle-card ${vehicle === 'sedan' ? 'selected' : ''}`}
            onClick={() => setVehicle('sedan')}
          >
            <img src="/assets/images/lincoln-mkt.jpg" alt="Lincoln MKT" />
            <h3>Lincoln MKT Sedan</h3>
            <p className="price">$120/saat</p>
          </div>
        </div>

        <button className="cta-button">Rezervasyonu Tamamla</button>
      </form>
    </section>
  );
};

export default ReservationForm;
