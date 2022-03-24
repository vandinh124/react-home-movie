import React from 'react';
//Styles
import { Wrapper, Content } from './Grid.Styles';

const Grid = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Grid;
