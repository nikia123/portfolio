import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0); 
  const length = Object.keys(images).length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Convert the images object into an array
  const imagesArray = Object.values(images);

  return (
    <section className='slider'>
      <button onClick={prevImage} className='left-arrow'>{`<`}</button>
      {imagesArray.map((image, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (<img src={image.src} alt={image.alt} className='image' />)}
        </div>
      ))}
      <button onClick={nextImage} className='right-arrow'>{`>`}</button>
    </section>
  );
};

export default ImageSlider;

