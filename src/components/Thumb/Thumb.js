import React from 'react';
//PropTypes
import PropTypes from 'prop-types';
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

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
}
export default Thumb;
