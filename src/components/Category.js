import React from 'react';

export default function Category({ currentCategory, changeCategory }) {
  const categories = ["men's clothing", "women's clothing", 'jewelery', 'electronics'];

  const handleClick = category => {
    changeCategory(category);
  };

  return (
    <div className="category">
      {categories.map(category => (
        <div key={category}>
          <h3
            onClick={() => handleClick(category)}
            className={currentCategory === category ? 'category--active' : ''}>
            {category[0].toUpperCase() + category.slice(1)}
          </h3>
        </div>
      ))}
    </div>
  );
}
