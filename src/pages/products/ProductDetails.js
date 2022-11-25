import React, { useEffect, useState } from 'react';
import '../../styles/ProductDetails.scss';
import iconTick from '../../assets/tick.svg';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

const smallScreen = window.innerWidth < 600;
let imgVariants = {};
if (!smallScreen) {
  imgVariants = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: {
      opacity: 0,
      x: -30,
      transition: { duration: 0.3, delay: 0.15 },
    },
  };
} else {
  imgVariants = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3, delay: 0.15 },
    },
  };
}

let infoVariants = {};
if (!smallScreen) {
  infoVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: {
      opacity: 0,
      x: 30,
      transition: { duration: 0.3, delay: 0.15 },
    },
  };
} else {
  infoVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.3, delay: 0.15 },
    },
  };
}

export default function ProductDetails() {
  const { id } = useParams();
  const { increaseQuantity } = useCart();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setIsLoading(false);
        setItem(data);
        setError(null);
      } catch (err) {
        setIsLoading(false);
        setError('Could not fetch the data');
        console.log(err.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="product-details">
      {error && <h2 className="error">{error}</h2>}
      {isLoading && <h2 className="loading">Loading...</h2>}
      {!isLoading && (
        <div className="details-container">
          <motion.div
            className="details__img-box"
            variants={imgVariants}
            initial="initial"
            animate="animate"
            exit="exit">
            <img src={item.image} alt="product" className="details__img" />
          </motion.div>
          <motion.div
            className="details__info"
            variants={infoVariants}
            initial="initial"
            animate="animate"
            exit="exit">
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
          </motion.div>
        </div>
      )}
    </div>
  );
}
