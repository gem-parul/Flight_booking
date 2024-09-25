// import React from 'react';
// import './FlightCard.scss';

// const FlightCard = ({ flight }) => {
//   // const { airline, departure, duration, arrival, price, from, fromCode, to, toCode, emiPrice } = data;

//   return (
//     <div className="flight-card">
//       <span className="airline">{flight.airline}</span>
//       <div className="flight-info">
//         <span>{flight.toCode} {flight.to} - {flight.fromCode} {flight.from}</span>
//         <div className="flight-details">
//           <span>{flight.departure}</span>
//           <span>{flight.duration}</span>
//           <span>{flight.arrival}</span>
//         </div>
//       </div>
//       <div className="price-info">
//         <span>₹{flight.price}</span>
//         <span>No Cost EMI from ₹{flight.emiPrice}</span>
//       </div>
//       <button className="book-button">BOOK</button>
//     </div>
//   );
// };

import React from "react";
import "./FlightCard.scss";

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      {/* Airline Name */}
      <span className="airline">{flight.airline}</span>

      {/* Flight Information */}
      <div className="flight-details">
        <div className="flight-info">
          {/* Departure Information */}
          <div className="departure-info">
            <span className="location">
              <span className="code">{flight.fromCode}</span> {flight.from}
            </span>
            <span className="time">{flight.departure}</span>
          </div>

          {/* Duration */}
          <div className="duration">
            <span>{flight.duration}</span>
          </div>

          {/* Arrival Information */}
          <div className="arrival-info">
            <span className="location">
              <span className="code">{flight.toCode}</span> {flight.to}
            </span>
            <span className="time">{flight.arrival}</span>
          </div>
          <div className="price-info">
            <span className="price">₹{flight.price}</span>
            <span className="emi-info">
              No Cost EMI from <span className="emi-price"> ₹{flight.emiPrice} </span>
            </span>
          </div>
        </div>

        {/* Price and Book Button */}
        <div className="book-btn">
          <button className="book-button">BOOK</button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;

//good code
// export default FlightCard;
// import React from "react";
// import "./FlightCard.scss";

// const FlightCard = ({ flight }) => {
//   // const { airline, departure, duration, arrival, price, from, fromCode, to, toCode, emiPrice } = flight;

//   return (
//     <div className="flight-card">
//       {/* <div className="airline-logo"> */}
//         {/* Replace with your airline logo image */}
//         {/* <img src={`https://example.com/${flight.airline.toLowerCase()}-logo.png`} alt={flight.airline} /> <span>{flight.airline}</span> */}
//       {/* </div> */}
//       <span className="airline">{flight.airline}</span> {/* New line added here */}

//       <div className="flight-details">
//         <div className="departure-info">
//           <span>{flight.fromCode} {flight.from}</span>
//           {/* <span>{flight.from}</span> */}
//           <span>{flight.departure}</span>
//         </div>
//         <div className="duration">
//           <span>  </span>
//           <span>{flight.duration}</span>
//         </div>
//         <div className="arrival-info">
//           <span>{flight.toCode} {flight.to}</span>
//           {/* <span>{flight.to}</span> */}
//           <span>{flight.arrival}</span>
//           <div className="price-info">

//       </div>
//       <span>₹{flight.price}</span>
//         <span>No Cost EMI from ₹{flight.emiPrice}</span>
//         </div>

//       </div>
{
  /* <div className="price-info">
        <span>₹{flight.price}</span>
        <span>No Cost EMI from ₹{flight.emiPrice}</span>
      </div> */
}
{
  /* <button className="book-button">BOOK</button> */
}
//     </div>
//   );
// };

// export default FlightCard;

// const FlightCard = ({ flight }) => {
//   return (
//     <div className="flight-card m-2">
//       <div className="flight-info">
//         <div>
//           <div className="airline-image">
//             <span>{flight.airline}</span>
//           </div>
//           <div className="airline-div">
//             <div className="airline-from">
//               <div className="mr-3">{flight.fromCode} </div>
//               <div>{flight.from}</div>
//             </div>
//             <div className="airline-to">
//               <div className="mr-3">{flight.toCode} </div>
//               <div>{flight.to}</div>
//             </div>
//           </div>
//           <div>
//           </div>
//         </div>
//         <div className="flight-details">
//           {/* <h4>{flight.airline}</h4> */}
//           {/* <p>Departure: {flight.departure}</p>
//           <p>Arrival: {flight.arrival}</p>
//           <p>Duration: {flight.duration}</p>
//           <p>Price: ₹{flight.price}</p> */}
//         </div>
//       </div>
//       {/* <button>Book</button> */}
//     </div>
//   );
// };

// export default FlightCard;
