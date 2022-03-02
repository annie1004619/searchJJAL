import React, { useState } from 'react';
import JJalItem from '../JJalItem';
import styled from 'styled-components';
import Pagination from '../Pagination';
import media from '../../lib/styles/media';
import { JjalType } from '../../api/jjal';

type JJalListProps = {
  data: Array<JjalType> | Array<unknown>;
};

export type JJalItemType = {
  imageUrl: string;
  _id?: string;
  title: string;
};

function JJalList({ data }: JJalListProps) {
  const [page, setPage] = useState(1);
  const limit = 18;
  const offset = (page - 1) * limit;
  const dataLength = data.length;
  const handlePages = (updatePage: number) => setPage(updatePage);

  return (
    <Container>
      <ContentWrapper>
        {dataLength === 0 ? (
          <Text>해당하는 짤이 없습니다.</Text>
        ) : (
          <Text>총 {dataLength} 개</Text>
        )}
        <ListWrapper>
          {data
            ?.slice(offset, offset + limit)
            .map(({ imageUrl, _id, title }: any) => (
              <JJalItem key={_id} imageUrl={imageUrl} title={title} />
            ))}
        </ListWrapper>
      </ContentWrapper>
      {data.length !== 0 && (
        <Pagination
          page={page}
          limit={limit}
          dataLength={dataLength}
          handlePages={handlePages}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 2vh auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContentWrapper = styled.div`
  height: auto;
  min-height: 100%;
`;
const Text = styled.div`
  font-size: 1.2rem;
  color: #aaaaaa;
  font-weight: bold;
`;
const ListWrapper = styled.div`
  margin: 2vh 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 30px;
  justify-items: center;
  @media (max-width: ${media.laptopM}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${media.tablet}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export default JJalList;
