import React from 'react';
import styled from 'styled-components';
import { Bars } from 'react-loader-spinner';

function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Bars
        height="40"
        width="100"
        color="grey"
        ariaLabel="loading-indicator"
      />
    </SpinnerContainer>
  );
}

const SpinnerContainer = styled.div`
  margin: 10vh;
`;
export default LoadingSpinner;
