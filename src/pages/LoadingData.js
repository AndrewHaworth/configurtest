import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const LoadingImage = styled.img`
  animation: rotation 2s linear infinite;
  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`;

const LoadingData = () => {
  return (
    <LoadingContainer>
      <LoadingImage src="exampleimage.png" alt="Loading Data..." />
    </LoadingContainer>
  );
};

export default LoadingData;
