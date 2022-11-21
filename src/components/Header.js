import React from 'react';
import logo from '../assets/logo.png';
import Cart from '../pages/Cart';
import Navbar from './Navbar';
import '../styles/Header.scss';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__left">
        <img src={logo} alt="logo" />
        <h1>Fashion</h1>
      </Link>
      <div className="header__right">
        <SearchBar />
        <Navbar />
        <Cart />
      </div>
    </header>
  );
}
