import React, { useEffect, useState } from 'react';
import '../../styles/Products.scss';
import Category from '../../components/Category';
import ProductCard from '../../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const categories = ['All', "women's clothing", "men's clothing", 'jewelery', 'electronics'];

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
    <div className="products">
      <Category categories={categories} />
      <div className="products__container">
        <ProductCard products={products} />
      </div>
    </div>
  );
}
