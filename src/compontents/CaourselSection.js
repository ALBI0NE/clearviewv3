import React from "react";
import brandLogo from "../img/logotest.png";
import offer1 from "../img/offer1.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselSection = () => {
  return (
    <>
      <div className='carousel-section'>
        <div className='carousel-container'>
          <Carousel
            infiniteLoop
            autoPlay
            showArrows={false}
            showStatus={false}
            showThumbs={false}
          >
            <div className='carousel-item'>
              <img
                src={offer1}
                alt='Offer showing 2 pairs of glasses in price of one'
              />
            </div>
            <div className='carousel-item'>
              <img src={brandLogo} alt='' />
            </div>
            <div className='carousel-item'>
              <img src={brandLogo} alt='' />
            </div>
            <div className='carousel-item'>
              <img src={brandLogo} alt='' />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CarouselSection;
