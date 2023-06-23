import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const AllTheBest = () => {
    const AnimatedAllTheBest = styled.h1`
    animation: ${fadeAnimation} 3s linear infinite;
  `;

    return <AnimatedAllTheBest><h1 style={{color:'burlywood',marginTop:'5rem'}}>All the best!</h1></AnimatedAllTheBest>;
};


export default AllTheBest;
