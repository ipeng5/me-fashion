import React from 'react';
import '../../styles/ProductDetails.scss';
import Category from '../../components/Category';
import iconTick from '../../assets/tick.svg';

export default function ProductDetails() {
  return (
    <div className="product-details">
      <Category />
      <div className="details-container">
        <div className="details__img"></div>
        <div className="details__info">
          <h2 className="details__info--title">Product title</h2>
          <h3 className="details__info--price">€92.00</h3>
          <p className="details__info--description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt velit quasi enim.
            Beatae non sunt qui temporibus ullam consequuntur quisquam? Asperiores beatae deserunt
            doloremque laborum consequatur natus voluptates iste tenetur.
          </p>
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
