import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { FiSearch } from 'react-icons/fi';
import { BsArrowReturnLeft, BsXCircle } from 'react-icons/bs';

type SearchBarProps = {
  text: string;
  onSubmitText: () => void;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cancelAllText: () => void;
};
function SearchBar({
  text,
  onChangeText,
  onSubmitText,
  cancelAllText,
}: SearchBarProps) {
  return (
    <Container>
      <IconWrapper>
        <FiSearch size={20} color={`#757575`} />
      </IconWrapper>
      <InputWrapper>
        <Input
          value={text}
          onChange={onChangeText}
          invisible={true}
          bgColor="#f3f3f3"
        />
        {text && (
          <Button onClick={cancelAllText} iconStyle>
            <BsXCircle
              size={15}
              color={`#757575`}
              style={{
                alignItems: 'center',
                height: '100%',
              }}
            />
          </Button>
        )}
      </InputWrapper>

      <Button onClick={onSubmitText} iconStyle>
        <BsArrowReturnLeft
          size={20}
          color={`#757575`}
          style={{
            justifyContent: 'center',
            height: '100%',
          }}
        />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  border: 1px solid #c4c4c4;
  background-color: #f3f3f3;
  :hover {
    border: 1px solid #2591c7;
    box-shadow: 0 0 0 2px rgba(207, 235, 241, 0.986);
  }
  :focus {
    border: 1px solid red;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(0, 98, 65, 0.2);
  }
  align-items: center;
  border-radius: 20px;
  justify-content: space-around;
`;
const IconWrapper = styled.div`
  width: 8%;
  background-color: inherit;
  text-align: center;
`;
const InputWrapper = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
`;

export default SearchBar;
