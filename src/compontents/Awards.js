import React, { Component, useState, useEffect } from "react";
import brandLogo from "../img/logotest.png";

const logos = [brandLogo, brandLogo, brandLogo, brandLogo, brandLogo];

export default function Awards() {
  const [logoArray, setLogoArray] = useState(logos);
  const [currentLogoPosition, setCurrentLogoPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoPosition((currentLogoPosition + 1) % logoArray.length);
    }, 5000); // change the logo every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [currentLogoPosition, logoArray.length]);

  return (
    <div>
      <img
        src={logoArray[currentLogoPosition]}
        alt={`Logo ${currentLogoPosition + 1}`}
      />
    </div>
  );
}
