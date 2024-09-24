import React, { useState } from 'react';

const FilterBar = ({ activeFilters, applyFilters }) => {
    const [price, setPrice] = useState(activeFilters.includes('price'));
    const [time, setTime] = useState(activeFilters.includes('time'));
    const [duration, setDuration] = useState(activeFilters.includes('duration'));
  
    const handleApplyFilters = () => {
      let newFilters = [];
  
      if (price) newFilters.push('price');
      if (time) newFilters.push('time');
      if (duration) newFilters.push('duration');
  
      applyFilters(newFilters);
    };
  
    return (
      <div>
        <h3>Sort By:</h3>
        <label>
          <input type="checkbox" checked={price} onChange={() => setPrice(!price)} /> Price
        </label>
        <label>
          <input type="checkbox" checked={time} onChange={() => setTime(!time)} /> Departure Time
        </label>
        <label>
          <input type="checkbox" checked={duration} onChange={() => setDuration(!duration)} /> Duration
        </label>
        <button onClick={handleApplyFilters}>Apply Filters</button>
      </div>
    );
  };

export default FilterBar;