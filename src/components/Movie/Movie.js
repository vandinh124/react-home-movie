import React from 'react';
import { useParams } from 'react-router-dom';
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//Components
import Grid from '../Grid/Grid';
import Spinner from '../Spinner/Spinner';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieInfoBar from '../MovieInfoBar/MovieInfoBar';
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

  if (loading) return <Spinner />;
  if (error) return <div>Somthing went wrong ... </div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
    </>
  );
};

export default Movie;
