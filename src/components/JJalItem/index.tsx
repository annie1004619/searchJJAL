import React from 'react';
import { JJalItemType } from '../JJalList';
import styled from 'styled-components';
import LazyImage from '../LazyImage';
import media from '../../lib/styles/media';

function JJalItem({ imageUrl, title }: JJalItemType) {
  return (
    <Container>
      <LazyImage imageUrl={imageUrl} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #fff;
  @media (max-width: ${media.laptopL}px) {
    width: 80%;
  }
  @media (max-width: ${media.tablet}px) {
    width: 200px;
  }
`;

const Title = styled.div`
  font-size: 0.8rem;
  color: #494747;
  height: 80px;
  font-weight: bold;
  padding: 1vh 1vw 0;
  line-height: 15px;
  text-overflow: ellipsis;
`;

export default JJalItem;
