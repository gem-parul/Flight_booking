import React from "react";
import "./FlightCard.scss";
const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card m-2">
      <div className="flight-info">
        <div className="airline-logo">
          <img src="./../../../public/assets/AirAsia.png" alt={flight.airline} />
        </div>
        <div className="flight-details">
          <div></div>
          <h4>{flight.airline}</h4>
          <p>Departure: {flight.departure}</p>
          <p>Arrival: {flight.arrival}</p>
          <p>Duration: {flight.duration}</p>
          <p>Price: ₹{flight.price}</p>
        </div>
      </div>
      <button>Book</button>
    </div>
  );
};

export default FlightCard;
