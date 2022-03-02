import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getJjalThunk } from '../modules/jjal/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import JJalList from '../components/JJalList';
import LoadingSpinner from '../components/LoadingSpinner';
import ScrollButton from '../components/atoms/ScrollButton';

function KeyWord() {
  const params = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.jjalReducer.jjals,
  );
  useEffect(() => {
    if (params.keyword) {
      dispatch(getJjalThunk(params.keyword));
    }
  }, [params]);

  return (
    <Container>
      <Header searchIcon={true} text={params.keyword} />
      <Line />
      <DataWrapper>
        {loading && <LoadingSpinner />}
        {error && <div>error</div>}
        {data && <JJalList data={data} />}
      </DataWrapper>
      <ScrollButton />
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  margin: 3vh auto 0;
`;
const Line = styled.div`
  margin: 2vh 0;
  border-bottom: 1px solid #c4c4c4;
`;
const DataWrapper = styled.div`
  display: flex;
  background-color: inherit;
  align-items: center;
  flex-direction: column;
`;
export default KeyWord;
