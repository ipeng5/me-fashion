import React from 'react';
import '../styles/CartItem.scss';
import iconAdd from '../assets/add.svg';
import iconSubtract from '../assets/subtract.svg';

export default function CartItem() {
  return (
    <>
      <div className="item">
        <div className="item__info">
          <div className="item__info--img"></div>
          <div className="item__info--details">
            <p>Good T-shirt</p>
            <div className="item__info--quantity">
              <img src={iconSubtract} alt="subtract" />
              <input type="number" />
              <img src={iconAdd} alt="add" />
            </div>
          </div>
        </div>
        <p className="item__price">€88.00</p>
      </div>
    </>
  );
}
