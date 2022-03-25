import React from 'react';
import { useParams } from 'react-router-dom';
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//Components
import Grid from '../Grid/Grid';
import { Spinner } from '../Spinner/Spinner';
//Hook
import useMovieFetch from '../../hooks/useMovieFetch';
//Image
import NoImage from '../../images/no_image.jpg';

const Movie = () => {
  //get the param from the link path='/:movieId'
  const { movieId } = useParams();
  //rename state to movie
  console.log(movieId);
  const { state: movie, loading, error } = useMovieFetch(movieId);
  return <>Movie</>;
};

export default Movie;
