import React, { useState } from 'react';
import '../../styles/Products.scss';
import Category from '../../components/Category';
import ProductCard from '../../components/ProductCard';
import { motion } from 'framer-motion';

export default function Products({ products, isLoading, error }) {
  const [currentCategory, setCurrentCategory] = useState("men's clothing");

  const changeCategory = newCategory => {
    setCurrentCategory(newCategory);
  };

  const filteredProducts = products.filter(product => product.category === currentCategory);

  return (
    <div className="products">
      <Category currentCategory={currentCategory} changeCategory={changeCategory} />

      {error && <h2 className="error">{error}</h2>}
      {isLoading && <h2 className="loading">Loading...</h2>}
      <motion.div className="products__container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {!isLoading && <ProductCard products={filteredProducts} />}
      </motion.div>
    </div>
  );
}
