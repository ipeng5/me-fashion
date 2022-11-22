import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/products/Products';
import ProductDetails from './pages/products/ProductDetails';
import Contact from './pages/Contact';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productArr = [];
    const fetchData = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
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
      setProducts(productArr);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<ProductDetails products={products} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
