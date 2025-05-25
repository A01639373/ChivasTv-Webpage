// FilterBar.jsx
import React from 'react';
import '../styles/FilterBar.css';

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="filter-buttons">
      <button
        className={filter === 'todos' ? 'active' : ''}
        onClick={() => setFilter('todos')}
      >
        Todos
      </button>
      <button
        className={filter === 'gratis' ? 'active' : ''}
        onClick={() => setFilter('gratis')}
      >
        Gratis
      </button>
      <button
        className={filter === 'suscriptor' ? 'active' : ''}
        onClick={() => setFilter('suscriptor')}
      >
        Suscriptor
      </button>
    </div>
  );
};

export default FilterBar;
