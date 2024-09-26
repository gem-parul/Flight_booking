import React, { useState } from "react";
import "./FilterBar.scss";

const FilterBar = ({ activeFilters, applyFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState(activeFilters);

  const handleFilterChange = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];
    
    setSelectedFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  return (
    <div className="p-2">
    <div className="filter-bar">
      <span>Sort By:</span>
      <button
        className={`filter-btn ${selectedFilters.includes("price") ? "active" : ""}`}
        onClick={() => handleFilterChange("price")}
      >
        Price
      </button>
      <button
        className={`filter-btn ${selectedFilters.includes("duration") ? "active" : ""}`}
        onClick={() => handleFilterChange("duration")}
      >
        Duration
      </button>
      <button
        className={`filter-btn ${selectedFilters.includes("time") ? "active" : ""}`}
        onClick={() => handleFilterChange("time")}
      >
        Departure Time
      </button>
    </div>
    </div>
  );
};

export default FilterBar;