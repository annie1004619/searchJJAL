import React from 'react';
import styled from 'styled-components';
import { useLazyImageObserver } from '../../hooks/useLazyImageObserver';

type LazyImageProps = {
  imageUrl: string;
  alt: string;
};

function LazyImage({ imageUrl, alt }: LazyImageProps) {
  const [imageSrc, imageRef] = useLazyImageObserver(imageUrl);

  return <StyledImg ref={imageRef} src={imageSrc} alt={alt} />;
}

const StyledImg = styled.img`
  background-color: #223d55;
  height: 200px;
  width: 100%;
  border-radius: 20px 20px 0 0;
`;

export default LazyImage;
