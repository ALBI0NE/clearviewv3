import React, { useState, useEffect } from "react";
import brandLogo from "../img/logotest.png";
import Carousel from "react-bootstrap/Carousel";

function Awards() {
  const brands = [
    { id: 1, url: brandLogo },
    { id: 2, url: brandLogo },
    { id: 3, url: brandLogo },
    { id: 4, url: brandLogo },
    { id: 5, url: brandLogo },
    { id: 6, url: brandLogo },
    { id: 7, url: brandLogo },
  ];

  return (
    <>
      <div className='third-section'>
        <h2>LOOOG</h2>
        <Carousel>
          <Carousel.Item>
            {brands.map((brand) => (
              <img key={brand.id} src={brand.url} className='img test' />
            ))}
          </Carousel.Item>
          <Carousel.Item>
            {brands.map((brand) => (
              <img key={brand.id} src={brand.url} />
            ))}
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Awards;
