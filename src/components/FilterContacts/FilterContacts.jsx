import React from 'react';
import './FilterContacts.module.css';

export const FilterContacts = ({ filter, onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search contacts"
      />
    </div>
  );
};