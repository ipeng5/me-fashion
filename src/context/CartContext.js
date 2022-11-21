import { createContext, useContext, useEffect, useState } from 'react';
import Cart from '../components/Cart';

const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  // const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <CartContext.Provider value={{ openCart, closeCart, isOpen }}>
      {children}
      {isOpen && <Cart />}
    </CartContext.Provider>
  );
}
