import React from 'react';
import logo from '../assets/logo.png';
import Navbar from './Navbar';
import '../styles/Header.scss';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import iconCart from '../assets/cart.svg';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { openCart } = useCart();

  return (
    <header className="header">
      <Link to="/" className="header__left">
        <img src={logo} alt="logo" />
        <h1>Fashion</h1>
      </Link>
      <div className="header__right">
        <SearchBar />
        <Navbar />
        <div className="cart-group">
          <img src={iconCart} alt="cart" onClick={openCart} className="cart-icon" />;
          <div className="red-dot" onClick={openCart}>
            88
          </div>
        </div>
      </div>
    </header>
  );
}
