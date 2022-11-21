import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Category.scss';

export default function Category() {
  return (
    <div className="category">
      <NavLink>
        <h3>category1</h3>
      </NavLink>
      <NavLink>
        <h3>category1</h3>
      </NavLink>
      <NavLink>
        <h3>category1</h3>
      </NavLink>
    </div>
  );
}
