import React from "react";
import investorAwards from "../img/investorAwards.png";
import dxaAwards from "../img/dxaAwards.png";
import opticianAwarrds from "../img/opticianAwarrds.png";
import ukcxaAwards from "../img/ukcxaAwards.png";
import herosAwards from "../img/herosAward.jpg";

const Awards = () => {
  const awardsLogos = [
    investorAwards,
    dxaAwards,
    opticianAwarrds,
    ukcxaAwards,
    herosAwards,
  ];

  return (
    <>
      <div className='awards-section'>
        <div className='awards-container'>
          <div className='awards-items'>
            {awardsLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Award logo ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
