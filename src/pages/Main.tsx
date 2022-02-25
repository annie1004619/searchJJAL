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

import { RootState } from '../modules';
import { setInit } from '../modules/jjal/action';
import { getJjalThunk } from '../modules/jjal/thunk';

import useDebounce from '../hooks/useDebounce';

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.jjalReducer.jjals,
  );

  const [text, setText] = useState('');
  const [previousText, setPreviousText] = useState('');
  const onChangeText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const debounceValue = useDebounce<string>(text, 500);

  const cancelAllText = () => {
    setText('');
  };

  const onSubmitText = () => {
    if (text.length === 0) {
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
    console.log(debounceValue === previousText);
    if (debounceValue.length !== 0) {
      dispatch(getJjalThunk(text));
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

export default Main;
