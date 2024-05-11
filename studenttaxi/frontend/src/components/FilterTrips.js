import React from 'react';

const FilterTrips = ({ onFilterChange }) => {
    return (
        <div className="filter-container">
            <input
                type="text"
                placeholder="Filter trips..."
                onChange={e => onFilterChange(e.target.value)}
                className="filter-input"
            />
        </div>
    );
};

export default FilterTrips;
