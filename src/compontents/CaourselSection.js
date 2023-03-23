import React from "react";
import brandLogo from "../img/logotest.png";
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
              <img src={brandLogo} />
            </div>
            <div className='carousel-item'>
              <img src={brandLogo} />
            </div>
            <div className='carousel-item'>
              <img src={brandLogo} />
            </div>
            <div className='carousel-item'>
              <img src={brandLogo} />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CarouselSection;
