import React, { useState, useEffect } from 'react';
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
//API
import API from '../../API';
//image
import NoImage from '../../images/no_image.jpg';
//hooks
import { useHomeFetch } from '../../hooks/useHomeFetch';
//components
import HeroImage from '../HeroImage/HeroImage';
const Home = () => {
    const { state, loading, error } = useHomeFetch();
    console.log(state)
  return (
    <>
        {state.results[0] &&
            <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].title}
                text={state.results[0].overview}
            />
        }
        
    </>
  ) 
};

export default Home;
