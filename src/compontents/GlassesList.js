import React, { useState, useEffect } from "react";
import product1 from "../img/product1.png";
import product2 from "../img/product2.png";
import product3 from "../img/product3.png";
import sunglasses1 from "../img/sunglasses.png";
import sunglasses2 from "../img/Sunglasses2.png";
import sunglasses3 from "../img/sunglasses3.png";
import contact1 from "../img/contact1.png";
import contact2 from "../img/contact2.png";
import glassescase from "../img/case.png";
import lensescase from "../img/lensecase.png";
import wipes from "../img/wipes.png";

const GlassesList = () => {
  const [glasses, setGlasses] = useState([]);
  const [sunglasses, setSunglasses] = useState([]);
  const [acessories, setAcessories] = useState([]);
  const [lenses, setLenses] = useState([]);

  useEffect(() => {
    const listOfGlasses = [
      {
        id: 1,
        image: product1,
        heading: "Designer Glasses",
        description: "Fashionable glasses for vision and style.",
      },
      {
        id: 2,
        image: product2,
        heading: "Round Glasses",
        description:
          "Circular lenses held by curved temples, giving a vintage style ",
      },
      {
        id: 3,
        image: product3,
        heading: "Granny Glasses",
        description: "Modern look, held by temples at the top corners",
      },
    ];

    setGlasses(listOfGlasses);
  }, []);
  useEffect(() => {
    const listOfSungallses = [
      {
        id: 1,
        image: sunglasses1,
        heading: "RayBan Glasses",
        description: "Expensive glasses for expensive taste",
      },
      {
        id: 2,
        image: sunglasses2,
        heading: "Police sunglasses",
        description: "Fell like the best sherrif in town",
      },
      {
        id: 3,
        image: sunglasses3,
        heading: "Sunset sunglasses",
        description: "Beautiful colour sunglasses",
      },
    ];

    setSunglasses(listOfSungallses);
  }, []);
  useEffect(() => {
    const listOfAcessories = [
      {
        id: 1,
        image: contact1,
        heading: "Normal contact lenses",
        description: "Clear pack of two contact lenses",
      },
      {
        id: 2,
        image: contact2,
        heading: "Orange contact lense",
        description: "Single contact lense - orange colour",
      },
    ];

    setLenses(listOfAcessories);
  }, []);
  useEffect(() => {
    const listOfLenses = [
      {
        id: 1,
        image: glassescase,
        heading: "Case for glasses",
        description: "Stylish case to keep glasses safe",
      },
      {
        id: 2,
        image: lensescase,
        heading: "Case for lenses",
        description: "Kepp your contacts safe",
      },
      {
        id: 3,
        image: wipes,
        heading: "Wipes",
        description: "Best wipes for glasses",
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
