import React, { useState, useRef, useEffect } from 'react';
import PLACE_HOLDER from './img/placeholder.jpg';
import styled from 'styled-components';

type ImgProps = {
  src: string;
  alt: string;
};
function Img({ src, alt }: ImgProps) {
  const [isLoad, setIsLoad] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    function loadImage() {
      setIsLoad(true);
    }

    const imgEl = imgRef.current;
    imgEl && imgEl.addEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    return () => {
      imgEl && imgEl.removeEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    };
  }, []);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, {
        // 확인을 위해 이미지 절반이 나타날 때 로딩한다.
        threshold: 0.5,
      });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, []);

  return <StyledImg ref={imgRef} src={isLoad ? src : PLACE_HOLDER} alt={alt} />;
}

let observer: IntersectionObserver | null = null;
const LOAD_IMG_EVENT_TYPE = 'loadImage';

function onIntersection(
  entries: IntersectionObserverEntry[],
  io: IntersectionObserver,
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
}

const StyledImg = styled.img`
  background-color: #223d55;
  height: 200px;
  width: 100%;
  border-radius: 20px 20px 0 0;
`;
export default Img;
