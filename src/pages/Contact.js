import React from 'react';
import '../styles/Contact.scss';
import iconTwitter from '../assets/twitter.svg';
import iconGitHub from '../assets/github.png';
import imgContact from '../assets/contact.png';

export default function Contact() {
  return (
    <div className="contact">
      <h2>WE'D LOVE TO HEAR FROM YOU</h2>
      <p>
        You can chat with our Virtual assistant 24/7 for answers to frequently asked questions, and
        be put through to a live agent if you need more help.
      </p>
      <h3>Call us</h3>
      <p>555-555-555</p>
      <h3>Openning hours</h3>
      <p>We offer 24/7 customer service</p>
      <h3>Let's connect on social media</h3>
      <div className="contact__social">
        <a href="https://github.com/ipeng5">
          <img src={iconGitHub} alt="github" className="contact__social--github" />
        </a>
        <a href="https://twitter.com/ipeng115">
          <img src={iconTwitter} alt="twitter" />
        </a>
      </div>
      <img src={imgContact} alt="me fashion" className="contact__img" />
    </div>
  );
}
