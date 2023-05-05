import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";
import { useRef } from "react";
import logo from "../img/logovAR1.png";

export default function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const isOpen = isStoreOpen();

  return (
    <header>
      <nav className='nav' ref={navRef}>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          CLOSE
        </button>
        <div className='nav-left'>
          <Link to='/Home' className='nav-logo'>
            <img src={logo}></img>
          </Link>
        </div>
        <div className='nav-right'>
          <ul>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/Services'>Services</CustomLink>
            <CustomLink to='/Glasses'>Glasses</CustomLink>
            <CustomLink to='/caretips'>Care Tips</CustomLink>
            <CustomLink to='/Appointments'>Make Booking</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
            <span className='store-status'>
              Store is: {isOpen ? "Open" : "Closed"}
            </span>
          </ul>
        </div>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        OPEN
      </button>
    </header>
  );
}

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
function isStoreOpen() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hour = now.getHours();

  if (dayOfWeek === 0) {
    // Sunday
    return false;
  } else if (dayOfWeek === 6) {
    // Saturday
    return hour >= 9 && hour < 13;
  } else {
    // Weekdays
    return hour >= 9 && hour < 17.5;
  }
}
