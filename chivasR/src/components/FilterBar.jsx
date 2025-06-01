// FilterBar.jsx
import React from 'react';
import '../styles/FilterBar.css';

/* La funcion FilterBar es el filtro de la pagina principal para facilitar que los usuarios puedan filtrar el contenido nuevo al que tengan acceso

>>> Funcion relevante
    -> classname = {filter === '[Filtro]' ? 'active' : ''} | condicional para la funcion del filtro
*/

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="filter-buttons">
      <button className={filter === 'todos' ? 'active' : ''} onClick={() => setFilter('todos')}>
        Todos
      </button>
      <button className={filter === 'gratis' ? 'active' : ''} onClick={() => setFilter('gratis')}>
        Gratis
      </button>
      <button className={filter === 'suscriptor' ? 'active' : ''} onClick={() => setFilter('suscriptor')}>
        Suscriptor
      </button>
    </div>
  );
};

export default FilterBar;