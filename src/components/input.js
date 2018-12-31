import React from 'react';
import { StyledInput, SearchContainer } from './styles';

const Input = (props) => (
  <SearchContainer>
    <h5>Search for a stop</h5>
    <StyledInput onChange={(e) => props.handleChange(e.target.value)} placeholder="Search for a stop"/>
  </SearchContainer>
);

export default Input;
