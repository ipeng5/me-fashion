import React, { useState } from 'react';
import '../../styles/Products.scss';
import Category from '../../components/Category';
import ProductCard from '../../components/ProductCard';

export default function Products({ products }) {
  const [currentCategory, setCurrentCategory] = useState("men's clothing");

  const changeCategory = newCategory => {
    setCurrentCategory(newCategory);
  };

  const filteredProducts = products.filter(product => product.category === currentCategory);

  return (
    <div className="products">
      <Category currentCategory={currentCategory} changeCategory={changeCategory} />
      <div className="products__container">
        <ProductCard products={filteredProducts} />
      </div>
    </div>
  );
}
