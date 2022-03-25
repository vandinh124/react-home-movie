import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import NotFound from './components/NotFound/NotFound';
//Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;
