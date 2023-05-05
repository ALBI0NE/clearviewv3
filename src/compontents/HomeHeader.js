import { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import doctorimg from "../img/doctorimage.png";

export default function HomeHeader() {
  const [breathing, setBreathing] = useState(false);

  useEffect(() => {
    setBreathing(true);
  }, []);

  return (
    <div className='home-section'>
      <div className='left-section'>
        <h1>TRUST THE BEST DOCTORS</h1>
        <p>
          At ClearView Optic, our team of the best doctors prioritize your
          vision health. Trust us to use the latest technology and techniques
          for accurate diagnoses and effective treatments. Choose the best for
          your eyesight and entrust your vision to our skilled professionals.
        </p>
        <div className='button-section'>
          <CustomLink to='/services'>
            <button className='LearnMore-btn'>LEARN MORE</button>
          </CustomLink>
          <CustomLink to='/appointments'>
            <button className='Booking-btn'>BOOK AN APPOINTMENT</button>
          </CustomLink>
        </div>
      </div>
      <div className='right-section'>
        <div className={`doctor-img ${breathing ? "breathing" : ""}`}>
          <div className='doctor-box'>
            <img className='img-holder' src={doctorimg} alt='Doctor Image' />
          </div>
        </div>
      </div>
    </div>
  );
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
}
