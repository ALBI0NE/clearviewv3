import { useEffect, useState } from "react";
import doctorimg from "../img/doctorimage.png";

export default function HomeHeader() {
  const [breathing, setBreathing] = useState(false);

  useEffect(() => {
    setBreathing(true);
  }, []);

  return (
    <div className='first-section'>
      <div className='left-section'>
        <h1>TRUST THE BEST DOCTORS</h1>
        <p>
          Maecenas a placerat purus, sit amet consequat nisi. Integer sit amet
          ligula et ligula fermentum tempus. Phasellus eget sapien ipsum.
          Phasellus ut purus quis sem ornare consectetur vitae vel massa.
          Vestibulum condimentum erat eget sem ornare, tristique semper purus
          rhoncus. Praesent ullamcorper neque ut tortor gravida lobortis.
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
