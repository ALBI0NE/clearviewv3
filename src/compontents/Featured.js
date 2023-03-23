import React from "react";
import brandLogo from "../img/logotest.png";

const Featured = () => {
  return (
    <>
      <div className='featured-section'>
        <h2>Our Top Picks</h2>
        <div className='product-cards'>
          <div className='product first-card'>
            <div className='product-content'>
              <img src={brandLogo}></img>
              <p>
                Find your perfect style with our featured designer frames. Wide
                range of styles, colors, and materials to suit every taste.
              </p>
              <button>SHOP</button>
            </div>
          </div>
          <div className='product second-card'>
            <div className='product-content'>
              <img src={brandLogo}></img>
              <p>
                Enjoy clear vision without glasses with our featured contact
                lenses. Available in daily, two-week, and monthly options.
              </p>
              <button>SHOP</button>
            </div>
          </div>
          <div className='product third-card'>
            <div className='product-content'>
              <img src={brandLogo}></img>
              <p>
                Protect your eyes and enjoy clear vision with our featured
                prescription sunglasses. Wide range of styles, colors, and
                materials available.
              </p>
              <button>SHOP</button>
            </div>
          </div>
        </div>
        <div className='load'>
          <button>LOAD MORE</button>{" "}
        </div>
      </div>
    </>
  );
};

export default Featured;
