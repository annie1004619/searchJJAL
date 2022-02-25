import React from 'react';
import { useLazyImageObserver } from '../../hooks/useLazyImageObserver';

type LazyImageProps = {
  src: string;
  alt: string;
};

function LazyImage({ src, alt }: LazyImageProps) {
  const [imageSrc, imageRef] = useLazyImageObserver(src);
  console.log(imageSrc);
  console.log(imageRef);

  return <div>hi</div>;
}

export default LazyImage;
