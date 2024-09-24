import React from 'react';
import FlightCard from './../FlightCard/FlightCard';

const FlightList = ({ flights }) => {
  return (
    <div>
      {flights.map(flight => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
};

export default FlightList;
