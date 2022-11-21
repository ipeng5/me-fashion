import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <ul className="header__right--nav">
      <Link to="/">
        <h2>HOME</h2>
      </Link>
      <Link to="/products">
        <h2>PRODUCTS</h2>
      </Link>
      <Link to="/contact">
        <h2>CONTACT</h2>
      </Link>
    </ul>
  );
}
