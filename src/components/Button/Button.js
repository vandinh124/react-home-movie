import React from 'react';
//Styles
import { Wrapper } from './Button.styles';

const Button = ({ text, callback }) => {
  return (
    <Wrapper typeof='button' onClick={callback}>
      {text}
    </Wrapper>
  );
};

export default Button;
