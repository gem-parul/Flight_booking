import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import flightData from "./../../Data/FlightData.json";
import FlightList from "./../FlightList/FlightList";
import FilterBar from "./../FilterBar/FilterBar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    const storedFlights =
      JSON.parse(localStorage.getItem("flights")) || flightData;
    const storedFilters =
      JSON.parse(localStorage.getItem("activeFilters")) || [];
    setFlights(storedFlights);
    setActiveFilters(storedFilters);
  }, []);

  const applyFilters = (newFilters) => {
    setActiveFilters(newFilters);
    localStorage.setItem("activeFilters", JSON.stringify(newFilters));
  
    // Start with all flight data
    let filteredFlights = [...flightData];
  
    // Sequential filtering logic
    newFilters.forEach((filter) => {
      if (filter === "price") {
        filteredFlights = filteredFlights.sort((a, b) => a.price - b.price);
      }
      if (filter === "duration") {
        filteredFlights = filteredFlights.sort((a, b) => {
          const durationA = parseDuration(a.duration);
          const durationB = parseDuration(b.duration);
          return durationA - durationB;
        });
      }
      if (filter === "time") {
        filteredFlights = filteredFlights.sort(
          (a, b) =>
            new Date(`1970-01-01T${a.departure}:00Z`) -
            new Date(`1970-01-01T${b.departure}:00Z`)
        );
      }
    });
  
    setFlights(filteredFlights);
    localStorage.setItem("flights", JSON.stringify(filteredFlights));
  };
  

  // Helper function to parse duration into minutes (e.g., "2h 15m" -> 135 minutes)
  const parseDuration = (duration) => {
    const [hours, minutes] = duration.match(/\d+/g).map(Number);
    return hours * 60 + (minutes || 0);
  };

  return (
    <div>
      {/* <button
        onClick={handleLogout}
        type="button"
        class="btn btn-success"
      >
        Logout
      </button> */}
      {/* <FilterBar activeFilters={activeFilters} applyFilters={applyFilters} /> */}
      <FlightList flights={flights} />
    </div>
  );
};

export default Dashboard;
