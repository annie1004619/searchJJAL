import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const keywordList = [
  { id: 0, word: '동물' },
  { id: 1, word: '음식' },
  { id: 2, word: '아이돌' },
  { id: 3, word: '재미' },
  { id: 4, word: '만화' },
];

type KeyWordProps = {
  onSubmitKeyWord: (word: string) => void;
};

function KeyWordBar({ onSubmitKeyWord }: KeyWordProps) {
  return (
    <div>
      <Title>추천 검색어</Title>
      <KeywordListWrapper>
        {keywordList.map(({ id, word }) => (
          <KeywordItem key={id} onClick={() => onSubmitKeyWord(word)}>
            <Button>{word}</Button>
          </KeywordItem>
        ))}
      </KeywordListWrapper>
    </div>
  );
}

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #727272;
  margin: 1vh 0;
`;
const KeywordListWrapper = styled.ul`
  display: flex;
`;
const KeywordItem = styled.li`
  margin-right: 0.5vw;
`;
export default KeyWordBar;
