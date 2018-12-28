import React from 'react';
import { StyledInput } from './styles';

const Input = (props) => (
  <StyledInput onChange={(e) => props.handleChange(e.target.value)}/>
);

export default Input;
