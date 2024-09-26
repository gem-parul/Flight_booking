import React from "react";
import "./FlightCard.scss";

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      <div className="airline">
        <img
          src={`/assets/${flight.airline.toLowerCase()}.png`}
          alt={flight.airline}
          className="airline-img"
        />
        <span className="airline-name">{flight.airline}</span>
      </div>
      <div className="flight-details">
        <div className="flight-info">
          <div className="departure-info">
            <span className="location">
              <span className="code">{flight.fromCode}</span> {flight.from}
            </span>
            <span className="time">{flight.departure}</span>
          </div>
          <div className="duration">
            <span>{flight.duration}</span>
          </div>
          <div className="arrival-info">
            <span className="location">
              <span className="code">{flight.toCode}</span> {flight.to}
            </span>
            <span className="time">{flight.arrival}</span>
          </div>
          <div className="price-info">
            <span className="price">₹{flight.price}</span>
            <span className="emi-info">
              No Cost EMI from{" "}
              <span className="emi-price"> ₹{flight.emiPrice} </span>
            </span>
          </div>
        </div>
        <div className="book-btn">
          <button className="book-button">BOOK</button>
        </div>
      </div>
      <div className="detailed">
        <span className="refund">
          {flight.refundable ? (
            <span>Partially Refundable</span>
          ) : (
            <span>Non Refundable</span>
          )}
        </span>
          <div class="flight-details-link">
          <span>Flight Details</span>
          <span class="dropdown-icon">&lt;</span>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;