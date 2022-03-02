import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import JJalList from '../components/JJalList';
import KeyWordBar from '../components/KeyWordBar';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';
import Error from '../components/Error';
import ScrollButton from '../components/atoms/ScrollButton';

import { RootState } from '../modules';
import { setInit } from '../modules/jjal/actions';
import { getJjalThunk } from '../modules/jjal/thunk';

import useDebounce from '../hooks/useDebounce';
import media from '../lib/styles/media';
import useInput from '../hooks/useInput';

function Main() {
  const [text, onChangeText, setText] = useInput('');
  const [previousText, setPreviousText] = useState('');
  const debounceValue = useDebounce<string>(text, 500);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.jjalReducer.jjals,
  );

  const cancelAllText = () => {
    setText('');
  };

  const onSubmitText = () => {
    if (text.length === 0 || text === ' ') {
      alert('검색어를 입력해주세요');
      return;
    }
    if (text === previousText) {
      return;
    }
    dispatch(getJjalThunk(text));
  };

  const onSubmitKeyWord = (keyword: string) => {
    navigate(`/search/${keyword}`, { state: { keyword } });
  };

  useEffect(() => {
    if (debounceValue === ' ') {
      alert('검색어를 입력해주세요');
      setText('');
      return;
    }
    if (debounceValue.length !== 0) {
      dispatch(getJjalThunk(debounceValue));
      setPreviousText(debounceValue);
    }
  }, [debounceValue]);

  useEffect(() => {
    if (text.length === 0) {
      dispatch(setInit());
    }
  }, [text]);

  const onClickEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onSubmitText();
    }
  };
  return (
    <Container onKeyPress={onClickEnter}>
      <Header searchIcon={false} text="원하는 짤을 검색하세요" />
      <SearchBar
        text={text}
        onSubmitText={onSubmitText}
        onChangeText={onChangeText}
        cancelAllText={cancelAllText}
      />
      <Line />
      {!data && !text && <KeyWordBar onSubmitKeyWord={onSubmitKeyWord} />}
      <DataWrapper>
        {loading && <LoadingSpinner />}
        {error && <Error error={error} />}
        {data && <JJalList data={data} />}
      </DataWrapper>
      <ScrollButton />
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  margin: 3vh auto 0;
  min-width: ${media.tablet};
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

export default Main;
