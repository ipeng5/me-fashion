import React from 'react';
import '../../styles/Products.scss';
import Category from '../../components/Category';
import ProductCard from '../../components/ProductCard';

export default function Products() {
  return (
    <div className="products">
      <Category />
      <div className="products__container">
        <ProductCard />
      </div>
    </div>
  );
}
