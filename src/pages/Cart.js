import React from 'react';
import Footer from '../components/Footer';
import iconCart from '../assets/cart.svg';

export default function Cart() {
  return (
    <div>
      <img src={iconCart} alt="cart" />
      <Footer />
    </div>
  );
}
