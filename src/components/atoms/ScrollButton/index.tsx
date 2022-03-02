import React, { useEffect, useState } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import styled from 'styled-components';
import Button from '../Button';

type StyledScrollButtonProps = {
  showScroll: boolean;
};

function ScrollButton() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 150) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 150) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop); // scorll할 때 onScroll 이벤트 핸들러 지정
    return () => window.removeEventListener('scroll', checkScrollTop); // clean up
  }, [showScroll]);

  return (
    <ButtonWrapper showScroll={showScroll}>
      <Button onClick={scrollTop} iconStyle>
        <BsFillArrowUpSquareFill size={30} color={`#c2c2c2`} />
      </Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div<StyledScrollButtonProps>`
  position: fixed;
  z-index: 999;
  right: 20%;
  bottom: 100px;
  display: ${(props) => (props.showScroll ? 'flex' : 'none')};
`;
export default ScrollButton;
