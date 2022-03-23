import React from 'react';
//Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
//Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      Start here.
      <GlobalStyle />
    </div>
  );
}

export default App;
