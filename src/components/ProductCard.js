import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ products }) {
  return (
    <>
      {products.map(p => (
        <Link to={`/products/${p.id}`} className="product-card" key={p.id}>
          <div className="product-card__img-box">
            <img src={p.image} alt="product" className="product-card__img" />
          </div>
          <p className="product-card__name">{p.title}</p>
          <h3 className="product-card__price">€&nbsp;{p.price.toFixed(2)}</h3>
        </Link>
      ))}
    </>
  );
}
