import React from 'react';
import Footer from '../../components/Footer';
import Category from '../../components/Category';
import '../../styles/index.scss';

export default function Products() {
  return (
    <div>
      <Category />
      <div className="testa">
        <button className="test">test</button>
      </div>

      <Footer />
    </div>
  );
}
