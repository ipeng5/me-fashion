import React from 'react';
import '../styles/Contact.scss';
import iconTwitter from '../assets/twitter.svg';
import iconGitHub from '../assets/github.png';
import imgContact from '../assets/contact.png';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Cart from '../components/Cart';

export default function Contact() {
  const { isOpen } = useCart();

  return (
    <div className="contact">
      <div className="contact__content">
        <h2>WE'D LOVE TO HEAR FROM YOU</h2>
        <p>
          You can chat with our Virtual assistant 24/7 for answers to frequently asked questions,
          and be put through to a live agent if you need more help.
        </p>
        <h3>Call us</h3>
        <p>555-555-555</p>
        <h3>Opening hours</h3>
        <p>We offer 24/7 customer service</p>
        <h3>Let's connect !</h3>
        <div className="contact__social">
          <Link href="https://github.com/ipeng5" target="_blank">
            <img src={iconGitHub} alt="github" />
          </Link>
          <Link href="https://twitter.com/ipeng115" target="_blank">
            <img src={iconTwitter} alt="twitter" />
          </Link>
        </div>
      </div>
      <img src={imgContact} alt="me fashion" className="contact__img" />
      {isOpen && <Cart />}
    </div>
  );
}
