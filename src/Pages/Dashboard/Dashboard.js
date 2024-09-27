import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import flightData from "./../../Data/FlightData.json";
import FlightList from "./../FlightList/FlightList";
import FilterBar from "./../FilterBar/FilterBar";
import { FaSignOutAlt } from "react-icons/fa";
import "./Dashboard.scss";

const Dashboard = ({ location }) => {
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
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

    let filteredFlights = [...flightData];
    filteredFlights = filteredFlights.sort((a, b) => {
      for (let filter of newFilters) {
        if (filter === "price") {
          if (a.price !== b.price) return a.price - b.price;
        }
        if (filter === "duration") {
          const durationA = parseDuration(a.duration);
          const durationB = parseDuration(b.duration);
          if (durationA !== durationB) return durationA - durationB;
        }
        if (filter === "time") {
          const timeA = new Date(`1970-01-01T${a.departure}:00Z`);
          const timeB = new Date(`1970-01-01T${b.departure}:00Z`);
          if (timeA !== timeB) return timeA - timeB;
        }
      }
      return 0;
    });

    setFlights(filteredFlights);
    localStorage.setItem("flights", JSON.stringify(filteredFlights));
  };

  const parseDuration = (duration) => {
    const [hours, minutes] = duration.match(/\d+/g).map(Number);
    return (hours || 0) * 60 + (minutes || 0);
  };

  return (
    <div className="dashboard p-2">
      <div className="p-2">
        <div className="d-flex justify-content-between align-items-center pl-3 pr-3">
          <span className=" sort-by">Sort By</span>
          <FaSignOutAlt
            onClick={handleLogout}
            data-tip="Logout"
            className="icon-style"
          />
        </div>
        <FilterBar activeFilters={activeFilters} applyFilters={applyFilters} />
      </div>
      <div className="p-2">
        <FlightList flights={flights} />
      </div>
    </div>
  );
};

export default Dashboard;
