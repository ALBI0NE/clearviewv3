import { useEffect, useState } from "react";
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
          <button className='LearnMore-btn'>LEARN MORE</button>
          <button className='Booking-btn'>BOOK AN APPOINTMENT</button>
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
}
