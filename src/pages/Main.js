import React, { useEffect, useState } from 'react';
import Home from '../pages/Home';
import Products from '../pages/products/Products';
import ProductDetails from '../pages/products/ProductDetails';
import Contact from '../pages/Contact';
import Cart from '../components/Cart';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const productArr = [];
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setIsLoading(false);
        data.map(item => {
          productArr.push({
            id: item.id,
            title: item.title,
            description: item.description,
            category: item.category,
            price: item.price,
            image: item.image,
          });
          return item;
        });
        setError(null);
      } catch (err) {
        setIsLoading(false);
        setError('Could not fetch the data');
        console.error(err.message);
      }
      setProducts(productArr);
    };
    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products products={products} isLoading={isLoading} error={error} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
      </Routes>
      <Cart products={products} />
    </AnimatePresence>
  );
}
