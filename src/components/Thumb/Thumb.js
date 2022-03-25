import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt='img-thumb' />
        </Link>
      ) : (
        <Image src={image} alt='img-thumb' />
      )}
    </div>
  );
};

export default Thumb;
