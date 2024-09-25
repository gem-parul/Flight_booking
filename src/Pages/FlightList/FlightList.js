import React from 'react';
import FlightCard from './../FlightCard/FlightCard';

const FlightList = ({ flights }) => {
  return (
    <div class="p-2">
      {flights.map(flight => (
        <div class="p-2">
        <FlightCard key={flight.id} flight={flight} />
        </div>
      ))}
    </div>
  );
};

export default FlightList;
