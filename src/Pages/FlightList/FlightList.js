import React from 'react';
import FlightCard from './../FlightCard/FlightCard';

const FlightList = ({ flights }) => {
  return (
    <div>
      {flights.map(flight => (
        <div className ="p-2">
        <FlightCard key={flight.id} flight={flight} />
        </div>
      ))}
    </div>
  );
};

export default FlightList;
