// ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Imagecarousel = ({ images }) => {
  const slideStyle = {
    height: '500px', 
    width: '700px', 
  };

  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      swipeable={true}
      emulateTouch={true}
      dynamicHeight={true}
      className="custom-carousel"
    >
      {images.map((imageObj, index) => (
        <div key={index}>
          <div className='carousel-content'>
          <p className="text-white text-lg mb-2">{imageObj.text}</p>
          <img style={slideStyle}src={imageObj.image} alt={`Slide ${index + 1}`} />

          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Imagecarousel;
