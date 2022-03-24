import React, { useState, useEffect } from 'react';
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
//API
import API from '../../API';
//image
import NoImage from '../../images/no_image.jpg';
//hooks
import { useHomeFetch } from '../../hooks/useHomeFetch';
const Home = () => {
    const { state, loading, error } = useHomeFetch();
    console.log(state)
  return <div>Home Page</div>;
};

export default Home;
