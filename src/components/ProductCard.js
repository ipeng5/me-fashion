import React from 'react';

export default function ProductCard({ products }) {
  return (
    <>
      {products.map(p => (
        <div className="product-card" key={p.id}>
          <div className="product-card__img-box">
            <img src={p.image} alt="product" className="product-card__img" />
          </div>
          <p className="product-card__name">{p.title}</p>
          <h4 className="product-card__price">€ {p.price}</h4>
        </div>
      ))}
    </>
  );
}