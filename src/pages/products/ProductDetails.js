import React, { useEffect, useState } from 'react';
import '../../styles/ProductDetails.scss';
import iconTick from '../../assets/tick.svg';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const { increaseQuantity } = useCart();
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setItem(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="product-details">
      <div className="details-container">
        <div className="details__img-box">
          <img src={item.image} alt="product" className="details__img" />
        </div>
        <div className="details__info">
          <h2 className="details__info--title">{item.title}</h2>
          <h3 className="details__info--price">€&nbsp;{item.price?.toFixed(2)}</h3>
          <p className="details__info--description">{item.description}</p>
          <button
            className="btn"
            onClick={() => {
              increaseQuantity(id, item.image, item.title, item.price);
            }}>
            ORDER
          </button>
          <div className="details__info--guarantee">
            <img src={iconTick} alt="check" />
            <p>Free shipping from €20</p>
          </div>
          <div className="details__info--guarantee">
            <img src={iconTick} alt="check" />
            <p>1-2 working days delivery time</p>
          </div>
          <div className="details__info--guarantee">
            <img src={iconTick} alt="check" />
            <p>30 days right of withdrawal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
