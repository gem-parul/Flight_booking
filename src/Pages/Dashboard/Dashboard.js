import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import flightData from "./../../Data/FlightData.json";
import FlightList from "./../FlightList/FlightList";
import FilterBar from "./../FilterBar/FilterBar";
import "./Dashboard.scss";

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

    // Apply multiple sorts in sequence based on the order of filters
    filteredFlights = filteredFlights.sort((a, b) => {
      for (let filter of newFilters) {
        if (filter === "price") {
          if (a.price !== b.price) return a.price - b.price; // Ascending order of price
        }
        if (filter === "duration") {
          const durationA = parseDuration(a.duration);
          const durationB = parseDuration(b.duration);
          if (durationA !== durationB) return durationA - durationB; // Ascending order of duration
        }
        if (filter === "time") {
          const timeA = new Date(`1970-01-01T${a.departure}:00Z`);
          const timeB = new Date(`1970-01-01T${b.departure}:00Z`);
          if (timeA !== timeB) return timeA - timeB; // Ascending order of departure time
        }
      }
      return 0; // If all compared fields are equal
    });

    setFlights(filteredFlights);
    localStorage.setItem("flights", JSON.stringify(filteredFlights));
  };

  const parseDuration = (duration) => {
    const [hours, minutes] = duration.match(/\d+/g).map(Number);
    return (hours || 0) * 60 + (minutes || 0); // Convert to total minutes
  };

  return (
    <div className="dashboard">
      <button onClick={handleLogout} className="btn btn-success">
        Logout
      </button>
      <div className="p-2">
        <FilterBar activeFilters={activeFilters} applyFilters={applyFilters} />
      </div>
      <div className="p-2">
        <FlightList flights={flights} />
      </div>
    </div>
  );
};

export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import flightData from "./../../Data/FlightData.json";
// import FlightList from "./../FlightList/FlightList";
// import FilterBar from "./../FilterBar/FilterBar";
// import "./Dashboard.scss";
// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [flights, setFlights] = useState([]);
//   const [activeFilters, setActiveFilters] = useState([]);
//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };
//   useEffect(() => {
//     const storedFlights =
//       JSON.parse(localStorage.getItem("flights")) || flightData;
//     const storedFilters =
//       JSON.parse(localStorage.getItem("activeFilters")) || [];
//     setFlights(storedFlights);
//     setActiveFilters(storedFilters);
//   }, []);

//   const applyFilters = (newFilters) => {
//     setActiveFilters(newFilters);
//     localStorage.setItem("activeFilters", JSON.stringify(newFilters));

//     // Start with all flight data
//     let filteredFlights = [...flightData];

//     // Sequential filtering logic
//     newFilters.forEach((filter) => {
//       if (filter === "price") {
//         filteredFlights = filteredFlights.sort((a, b) => a.price - b.price);
//       }
//       if (filter === "duration") {
//         filteredFlights = filteredFlights.sort((a, b) => {
//           const durationA = parseDuration(a.duration);
//           const durationB = parseDuration(b.duration);
//           return durationA - durationB;
//         });
//       }
//       if (filter === "time") {
//         filteredFlights = filteredFlights.sort(
//           (a, b) =>
//             new Date(`1970-01-01T${a.departure}:00Z`) -
//             new Date(`1970-01-01T${b.departure}:00Z`)
//         );
//       }
//     });

//     setFlights(filteredFlights);
//     localStorage.setItem("flights", JSON.stringify(filteredFlights));
//   };

//   // Helper function to parse duration into minutes (e.g., "2h 15m" -> 135 minutes)
//   const parseDuration = (duration) => {
//     const [hours, minutes] = duration.match(/\d+/g).map(Number);
//     return hours * 60 + (minutes || 0);
//   };

//   return (
//     <div>
//       {/* <button
//         onClick={handleLogout}
//         type="button"
//         class="btn btn-success"
//       >
//         Logout
//       </button> */}
//       <div  className="background-color">
//       {/* <FilterBar activeFilters={activeFilters} applyFilters={applyFilters} /> */}
//       <FlightList flights={flights} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
