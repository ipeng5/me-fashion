import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Category({ categories }) {
  return (
    <div className="category">
      {categories.map(category => (
        <NavLink key={category}>
          <h3>{category[0].toUpperCase() + category.slice(1)}</h3>
        </NavLink>
      ))}
    </div>
  );
}
