import React from 'react';
//PropTypes
import PropTypes from 'prop-types';
//Styles
import { Wrapper } from './Button.styles';

const Button = ({ text, callback }) => {
  return (
    <Wrapper typeof='button' onClick={callback}>
      {text}
    </Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func
}
export default Button;
