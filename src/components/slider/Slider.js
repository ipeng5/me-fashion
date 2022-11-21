import React, { useState, useEffect } from 'react';
import '../../styles/Home.scss';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider';
import { nanoid } from 'nanoid';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 4000);
  //   return () => clearInterval(interval);
  // });

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div key={obj.id} className={slideIndex === index + 1 ? 'slide slide--active' : 'slide'}>
            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpeg`}
              alt="lifestyle"
              className="slide__img"
            />
            <div className="slide__info">
              <h1 className="slide__info--text">{obj.title}</h1>
              <button className="slide__info--cta">SHOP NOW</button>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />

      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={nanoid()}
            className={slideIndex === index + 1 ? 'slide__dot slide__dot--active' : 'slide__dot'}
            onClick={() => moveDot(index + 1)}></div>
        ))}
      </div>
    </div>
  );
}
