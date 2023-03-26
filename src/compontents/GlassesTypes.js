import React from "react";
import logotest from "../img/logotest.png";

const GlassesTypes = () => {
  const handleCategoryClick = (categoryId) => {
    const element = document.getElementById(categoryId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='glasses-types'>
      <div className='glasses-types-wrapper'>
        <div
          className='glasses-type-glasses'
          onClick={() => handleCategoryClick("normal-glasses")}
        >
          <img src={logotest} />
          <h3>Glasses</h3>
        </div>
        <div
          className='glasses-type-sunglasses'
          onClick={() => handleCategoryClick("sunglasses")}
        >
          <img src={logotest} />
          <h3>Sunglasses</h3>
        </div>
        <div
          className='glasses-type-lenses'
          onClick={() => handleCategoryClick("contact-lenses")}
        >
          <img src={logotest} />
          <h3>Contact Lenses</h3>
        </div>
        <div
          className='glasses-type-accessories'
          onClick={() => handleCategoryClick("acessories")}
        >
          <img src={logotest} />
          <h3>Accessories</h3>
        </div>
      </div>
    </div>
  );
};

export default GlassesTypes;
