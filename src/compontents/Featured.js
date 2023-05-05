import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import feature1 from "../img/feature1.jpg";
import feature2 from "../img/feature2.jpg";
import feature3 from "../img/feature3.jpg";

const Featured = () => {
  return (
    <>
      <div className='featured-section'>
        <h2>Our Top Picks</h2>
        <div className='product-cards'>
          <div className='product first-card'>
            <div className='product-content'>
              <img src={feature1} alt='Featured designer frames'></img>
              <p>
                Find your perfect style with our featured designer frames. Wide
                range of styles, colors, and materials to suit every taste.
              </p>
              <CustomLink to='/glasses'>
                <button>SHOP</button>
              </CustomLink>
            </div>
          </div>
          <div className='product second-card'>
            <div className='product-content'>
              <img src={feature2} alt='Featured contact lenses'></img>
              <p>
                Enjoy clear vision without glasses with our featured contact
                lenses. Available in daily, two-week, and monthly options.
              </p>
              <CustomLink to='/glasses'>
                <button>SHOP</button>
              </CustomLink>
            </div>
          </div>
          <div className='product third-card'>
            <div className='product-content'>
              <img src={feature3} alt='Featured prescription sunglasses'></img>
              <p>
                Protect your eyes and enjoy clear vision with our featured
                prescription sunglasses. Wide range of styles, colors, and
                materials available.
              </p>
              <CustomLink to='/glasses'>
                <button>SHOP</button>
              </CustomLink>
            </div>
          </div>
        </div>
        <div className='load'>
          <CustomLink to='/glasses'>
            <button>SHOP</button>
          </CustomLink>
        </div>
      </div>
    </>
  );
};
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Featured;
