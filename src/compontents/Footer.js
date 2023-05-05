import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className='footer-section'>
        <div className='footer-wrapper'>
          <div className='footer-content'>
            <div className='footer-content-left'>
              <h3>Useful Links</h3>
              <ul>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/Services'>Services</CustomLink>
                <CustomLink to='/Glasses'>Glasses</CustomLink>
                <CustomLink to='/caretips'>Care Tips</CustomLink>
                <CustomLink to='/Appointments'>Make Booking</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
              </ul>
            </div>
            <div className='footer-content-right'>
              <h3>ClearView Optic - Your Trusted Eye Care Partner</h3>
              <ul>
                <li>Visit us at one of our branches!</li>
                <div className='footer-media'>
                  <li>Phone: +44 1234 56789123</li>
                  <li> | Email: clearviewoptix@gmail.com</li>
                </div>
                <li>Follow us on social media for updates and promotions:</li>
                <div className='footer-media'>
                  <li>Facebook </li>
                  <li>| Twitter </li>
                  <li>| Instagram</li>
                </div>
              </ul>
            </div>
          </div>
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
export default Footer;
