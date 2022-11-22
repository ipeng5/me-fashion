import React, { useState } from 'react';
import '../../styles/Products.scss';
import Category from '../../components/Category';
import ProductCard from '../../components/ProductCard';

export default function Products({ products, isLoading, error }) {
  const [currentCategory, setCurrentCategory] = useState("men's clothing");

  const changeCategory = newCategory => {
    setCurrentCategory(newCategory);
  };

  const filteredProducts = products.filter(product => product.category === currentCategory);

  return (
    <div className="products">
      <Category currentCategory={currentCategory} changeCategory={changeCategory} />
      <div className="products__container">
        {error && <h2 className="error">{error}</h2>}
        {isLoading && <h2 className="loading">Loading...</h2>}
        {!isLoading && <ProductCard products={filteredProducts} />}
      </div>
    </div>
  );
}
