import React, { useState, useEffect } from "react";

const ShopStatus = () => {
  const [shopStatus, setShopStatus] = useState("");

  useEffect(() => {
    const checkShopStatus = () => {
      const currentTime = new Date();
      const currentDay = currentTime.getDay();
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();

      const isOpen = (day, hour, minute) => {
        const withinWeekdayHours =
          day >= 1 &&
          day <= 5 &&
          ((hour === 9 && minute >= 0) ||
            (hour > 9 && hour < 17) ||
            (hour === 17 && minute <= 30));
        const withinSaturdayHours =
          day === 6 &&
          ((hour === 9 && minute >= 0) ||
            (hour > 9 && hour < 13) ||
            (hour === 13 && minute === 0));
        return withinWeekdayHours || withinSaturdayHours;
      };

      if (isOpen(currentDay, currentHour, currentMinute)) {
        setShopStatus("Open");
      } else {
        setShopStatus("Closed");
      }
    };

    checkShopStatus();
    const interval = setInterval(checkShopStatus, 60 * 1000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='shop-status'>
      <h2>Shop Status</h2>
      <p>
        The shop is currently: <strong>{shopStatus}</strong>
      </p>
    </div>
  );
};

export default ShopStatus;
