import React from 'react';
import { JJalItemType } from '../JJalList';
import styled from 'styled-components';
import Img from '../Img';
import LazyImage from '../LazyImage';

function JJalItem({ imageUrl, title }: JJalItemType) {
  return (
    <Container>
      <Img src={imageUrl} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #fff;
`;

const Title = styled.div`
  font-size: 0.8rem;
  color: #494747;
  height: 80px;
  font-weight: bold;
  padding: 1vh 1vw 0;
  line-height: 15px;
`;

export default JJalItem;
