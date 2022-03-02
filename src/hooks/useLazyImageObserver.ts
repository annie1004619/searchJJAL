import PLACE_HOLDER from '../components/LazyImage/img/placeholder.jpg';
import { useEffect, useState, useRef } from 'react';

export function useLazyImageObserver(src: string) {
  const [imageSrc, setImageSrc] = useState(PLACE_HOLDER);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (imageRef?.current) {
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

  return [imageSrc, imageRef] as [string, typeof imageRef];
}
