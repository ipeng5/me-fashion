import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.scss';
import CartItem from './CartItem';

export default function Cart() {
  const { closeCart, cartItems } = useCart();
  const subTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div>
      <div className="cart__backdrop" onClick={closeCart}></div>
      <div className="cart__container">
        <div className="cancel-icon" onClick={closeCart}>
          &#215;
        </div>
        <h2>YOUR SHOPPING BAG</h2>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        {cartItems.length > 0 && <h3 className="cart__subtotal">Subtotal: €&nbsp;{subTotal}</h3>}
        {cartItems.length === 0 && <h3 className="cart__subtotal">Your bag is empty!</h3>}
        {cartItems.length > 0 && (
          <button className="btn" onClick={closeCart}>
            CHECKOUT
          </button>
        )}
        {cartItems.length === 0 && (
          <button className="btn" onClick={closeCart}>
            SHOP NOW
          </button>
        )}
      </div>
    </div>
  );
}
