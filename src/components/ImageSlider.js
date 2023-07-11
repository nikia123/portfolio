import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [slider, setslider] = useState(0); 
  const length = Object.keys(images).length;

  const nextImage = () => {
    setslider(slider === length - 1 ? 0 : slider + 1);
  };

  const prevImage = () => {
    setslider(slider === 0 ? length - 1 : slider - 1);
  };

  // Convert the images object into an array
  const imagesArray = Object.values(images);

  return (
    <section className='slider'>

      <div className='flex justify-around mb-6'>
        <button onClick={prevImage} className='left-arrow nav-links'>{`<`}</button>
        <button onClick={nextImage} className='right-arrow nav-links'>{`>`}</button>
      </div>

      <div id='image-container' 
        className='flex flex-col items-center justify-center h-[40rem] mx-auto'>

        {imagesArray.map((image, index) => (
          <div 
            className={index === slider ? 'slide active' : 'slide'} 
            key={index}>

            {index === slider && (
              <img src={image.src} alt={image.alt} className='image mb-4 max-h-[40rem]' />
            )}

          </div>
      ))}
      </div>
    </section>
  );
};

export default ImageSlider;

