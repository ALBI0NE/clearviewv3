import React, { useState, useEffect } from "react";
import logotest from "../img/logotest.png";

const GlassesList = () => {
  const [glasses, setGlasses] = useState([]);
  const [sunglasses, setSunglasses] = useState([]);
  const [acessories, setAcessories] = useState([]);
  const [lenses, setLenses] = useState([]);

  useEffect(() => {
    const listOfGlasses = [
      {
        id: 1,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 2,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 3,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 4,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 5,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 6,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 7,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 8,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 9,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
    ];

    setGlasses(listOfGlasses);
  }, []);
  useEffect(() => {
    const listOfSungallses = [
      {
        id: 1,
        image: logotest,
        heading: "dsfsdfsd",
        description: "description",
      },
      {
        id: 2,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 3,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 4,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 5,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 6,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 7,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 8,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 9,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
    ];

    setSunglasses(listOfSungallses);
  }, []);
  useEffect(() => {
    const listOfAcessories = [
      {
        id: 1,
        image: logotest,
        heading: "dsfsdfsd",
        description: "description",
      },
      {
        id: 2,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 3,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 4,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 5,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 6,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 7,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 8,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 9,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
    ];

    setLenses(listOfAcessories);
  }, []);
  useEffect(() => {
    const listOfLenses = [
      {
        id: 1,
        image: logotest,
        heading: "dsfsdfsd",
        description: "description",
      },
      {
        id: 2,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 3,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 4,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 5,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 6,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 7,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 8,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
      {
        id: 9,
        image: logotest,
        heading: "NAME",
        description: "description",
      },
    ];

    setAcessories(listOfLenses);
  }, []);

  return (
    <div className='glasses-section'>
      <div className='glasses-wrapper'>
        <div className='glasses-heading' id='normal-glasses'>
          <h2>Glasses</h2>
        </div>
        <div className='glasses-item-wrapper'>
          {glasses.map((glass) => (
            <div className='glasses-item' key={glass.id}>
              <img src={glass.image} alt={glass.heading} />
              <h3>{glass.heading}</h3>
              <p>{glass.description}</p>
            </div>
          ))}
        </div>
        <div className='glasses-heading' id='sunglasses'>
          <h2>Sunglasses</h2>
        </div>
        <div className='glasses-item-wrapper'>
          {sunglasses.map((sunglass) => (
            <div className='sunglasses-item' key={sunglass.id}>
              <img src={sunglass.image} alt={sunglass.heading} />
              <h3>{sunglass.heading}</h3>
              <p>{sunglass.description}</p>
            </div>
          ))}
        </div>
        <div className='glasses-heading' id='contact-lenses'>
          <h2>Contact Lenses</h2>
        </div>
        <div className='glasses-item-wrapper'>
          {lenses.map((lens) => (
            <div className='lenses-item' key={lens.id}>
              <img src={lens.image} alt={lens.heading} />
              <h3>{lens.heading}</h3>
              <p>{lens.description}</p>
            </div>
          ))}
        </div>
        <div className='glasses-heading' id='acessories'>
          <h2>Acessories</h2>
        </div>
        <div className='glasses-item-wrapper'>
          {acessories.map((accessory) => (
            <div className='acessories-item' key={accessory.id}>
              <img src={accessory.image} alt={accessory.heading} />
              <h3>{accessory.heading}</h3>
              <p>{accessory.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlassesList;
