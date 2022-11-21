import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.scss';
import CartItem from './CartItem';

export default function Cart() {
  const { closeCart } = useCart();

  return (
    <div>
      <div className="cart__backdrop" onClick={closeCart}></div>
      <div className="cart__container">
        <div className="cancel-icon">×</div>
        <h2>My shopping bag</h2>
        <CartItem />
        <h3 className="cart__subtotal">Subtotal: €140.00</h3>
        <button className="cart__btn">Checkout</button>
        <button className="cart__btn">Shop now</button>
      </div>
    </div>
  );
}
