import { useEffect, useState, useRef } from 'react';
import PLACE_HOLDER from '../components/Img/img/placeholder.jpg';

export function useLazyImageObserver(src: string) {
  const [imageSrc, setImageSrc] = useState(PLACE_HOLDER);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (imageRef?.current && !imageSrc) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        },
        { threshold: [0.25] },
      );
      observer.observe(imageRef.current);
    }
    return () => {
      observer && observer.disconnect();
    };
  }, [imageRef, imageSrc, src]);

  return [imageSrc, imageRef];
}
