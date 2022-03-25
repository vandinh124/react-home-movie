import React, { useState, useEffect, useRef } from 'react';
//Images
import searchIcon from '../../images/search-icon.svg';
//Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  //initial is {} and useRef will create a mutable variable
  const initial = useRef(true); // initial.current = true
  console.log(initial.current);
  useEffect(() => {
    //to skip initial in useEffect
    if (initial.current) {
      //initial.current can change directly and wont trigger as rerender like state
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
          type='text'
          placeholder='Search Movie'
          onChange={(e) => setState(e.target.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
