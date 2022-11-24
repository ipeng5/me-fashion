import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.scss';
import CartItem from './CartItem';
import { AnimatePresence, motion } from 'framer-motion';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { ease: 'easeInOut' } },
};

export default function Cart() {
  const { closeCart, cartItems, isOpen } = useCart();
  const subTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cart__backdrop"
          onClick={closeCart}
          key="backdrop"
          variants={backdrop}
          animate="visible"
          initial="hidden"
          exit="hidden"></motion.div>
      )}

      {isOpen && (
        <motion.div
          className="cart__container"
          key="modal"
          variants={modal}
          animate="visible"
          initial="hidden"
          exit="hidden">
          <div className="cancel-icon" onClick={closeCart}>
            &#215;
          </div>
          <h2>YOUR SHOPPING BAG</h2>
          <AnimatePresence>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </AnimatePresence>
          {cartItems.length > 0 && (
            <h3 className="cart__subtotal">Subtotal: €&nbsp;{subTotal.toFixed(2)}</h3>
          )}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
