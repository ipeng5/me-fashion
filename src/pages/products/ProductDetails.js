import React from 'react';
import '../../styles/ProductDetails.scss';
import iconTick from '../../assets/tick.svg';
import { useParams } from 'react-router-dom';

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const [item] = products.filter(item => item.id === +id);

  return (
    <div className="product-details">
      <div className="details-container">
        <div className="details__img-box">
          <img src={item.image} alt="product" className="details__img" />
        </div>
        <div className="details__info">
          <h2 className="details__info--title">{item.title}</h2>
          <h3 className="details__info--price">{item.price}</h3>
          <p className="details__info--description">{item.description}</p>
          <button className="btn">ORDER</button>
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
