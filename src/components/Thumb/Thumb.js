import React from 'react';
//Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      <Image src={image} alt='img-thumb' />
    </div>
  );
};

export default Thumb;
