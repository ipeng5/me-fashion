import React from 'react';
import iconLeft from '../../assets/left.svg';
import iconRight from '../../assets/right.svg';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === 'next' ? 'slide__btn slide__btn--next' : 'slide__btn slide__btn--prev'
      }>
      <img src={direction === 'next' ? iconRight : iconLeft} alt="arrow" className="slide__arrow" />
    </button>
  );
}
