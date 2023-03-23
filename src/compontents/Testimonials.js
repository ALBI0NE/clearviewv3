import React, { useState } from "react";

const Testimonials = () => {
  const [hoveredBox, setHoveredBox] = useState(null);
  const handleMouseEnter = (boxNumber) => {
    setHoveredBox(boxNumber);
  };
  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  const getBoxClassName = (boxNumber, baseClassName) => {
    let className = baseClassName;

    if (hoveredBox !== null && hoveredBox !== boxNumber) {
      className += " box-opacity";
    } else if (hoveredBox === boxNumber) {
      className += " box-hover";
    }

    return className;
  };

  return (
    <>
      <div className='customers-section'>
        <h2>Real Stories from Real People</h2>
        <div className='testimonials-wrapper '>
          <div className='testimonials-section'>
            <div
              className={getBoxClassName(1, "box-one box-rectangle")}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='box-content-wrapper'>
                <div className='box-name'>Sarah K.</div>
                <div className='box-title'>
                  Thorough and Personalized Eye Exam with Affordable Designer
                  Frames
                </div>
                <div className='box-description'>
                  "I recently visited ClearView Optic for an eye exam and was so
                  impressed with the level of care I received. The optometrist
                  was thorough and explained everything in detail, making the
                  exam feel personalized. I was also able to pick out a great
                  pair of designer frames and was pleasantly surprised by the
                  affordable prices. I highly recommend ClearView Optic to
                  anyone in need of eye care services."
                </div>
              </div>
            </div>
            <div
              className={getBoxClassName(2, "box-two box-box")}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='box-content-wrapper'>
                <div className='box-name'>Michael W.</div>
                <div className='box-title'>
                  Excellent Eye Care and Wide Selection of Frames and Lenses
                </div>
                <div className='box-description'>
                  "I had an exceptional experience at ClearView Optic. The staff
                  was friendly and knowledgeable, and the optometrist was
                  thorough and made me feel comfortable during my eye exam. I
                  also appreciated the wide selection of frames and lenses, and
                  was able to find a pair of prescription sunglasses that I
                  love. I will definitely be returning to ClearView Optic for
                  all of my eye care needs."
                </div>
              </div>
            </div>
            <div
              className={getBoxClassName(3, "box-three box-long")}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='box-content-wrapper'>
                <div className='box-name'>Jessica D.</div>
                <div className='box-title-long'>
                  Unbeatable Customer Service and Perfect Frame Fit
                </div>
                <div className='box-description-long'>
                  "I was blown away by the outstanding customer service I
                  received at ClearView Optic. The staff was friendly and
                  helpful, and made sure I was completely satisfied with my
                  purchase. I was able to find a great pair of frames that fit
                  my face and my budget, and I am so happy with my experience.
                  Thank you, ClearView Optic, for your unbeatable customer
                  service and perfect frame fit!"
                </div>
              </div>
            </div>
            <div
              className={getBoxClassName(5, "box-five box-box")}
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='box-content-wrapper'>
                <div className='box-name'>Karen M.</div>
                <div className='box-title'>
                  Professional and Personal Eye Care Experience with Style
                </div>
                <div className='box-description'>
                  "I recently visited ClearView Optic for an eye exam and was
                  impressed with the friendly and professional staff. The
                  optometrist provided thorough and personalized care, and I was
                  able to find stylish prescription sunglasses from the wide
                  selection of frames and lenses. I highly recommend ClearView
                  Optic for their personalized eye care and stylish options."
                </div>
              </div>
            </div>
            <div
              className={getBoxClassName(4, "box-four box-rectangle")}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='box-content-wrapper'>
                <div className='box-name'>David B.</div>
                <div className='box-title'>
                  High-Quality Eye Care and Revolutionary Progressive Lenses
                </div>
                <div className='box-description'>
                  "I recently switched to ClearView Optic for my eye care needs
                  and I am so glad I did. The optometrist was knowledgeable and
                  professional, and I was impressed with the high-quality eye
                  care I received. I also appreciated the wide selection of
                  frames and lenses, and was able to find a pair of
                  revolutionary progressive lenses that have made a huge
                  difference in my vision. I highly recommend ClearView Optic
                  for their superior eye care and innovative lens options."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
