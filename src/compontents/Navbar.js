import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";
import logo from "../img/logovAR1.png";
import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

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
            <CustomLink to='/contact'>Contact</CustomLink>
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
