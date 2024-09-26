import React, { useState } from "react";
import "./FilterBar.scss";

const FilterBar = ({ activeFilters, applyFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState(activeFilters);
  const [sortDirection, setSortDirection] = useState({});

  const handleFilterChange = (filter) => {
    let updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];

    // Toggle sort direction (ascending/descending)
    const currentDirection = sortDirection[filter] || "asc";
    const newDirection = currentDirection === "asc" ? "desc" : "asc";

    setSortDirection({ ...sortDirection, [filter]: newDirection });
    setSelectedFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const getArrow = (filter) => {
    return sortDirection[filter] === "asc" ? "↓" : "↑";
  };

  return (
    <div className="p-2">
      <div className="filter-bar">
        <button
          className={`filter-btn ${selectedFilters.includes("time") ? "active" : ""}`}
          onClick={() => handleFilterChange("time")}
        >
          DEPARTURE {selectedFilters.includes("time") && <span>{getArrow("time")}</span>}
        </button>
        <button
          className={`filter-btn ${selectedFilters.includes("duration") ? "active" : ""}`}
          onClick={() => handleFilterChange("duration")}
        >
          DURATION {selectedFilters.includes("duration") && <span>{getArrow("duration")}</span>}
        </button>
        <button
          className={`filter-btn ${selectedFilters.includes("price") ? "active" : ""}`}
          onClick={() => handleFilterChange("price")}
        >
          PRICE {selectedFilters.includes("price") && <span>{getArrow("price")}</span>}
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
