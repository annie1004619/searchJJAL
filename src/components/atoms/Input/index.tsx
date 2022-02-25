import React from 'react';
import styled, { css } from 'styled-components';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  invisible?: boolean;
  bgColor?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
};

type StyledInputProps = {
  invisible?: boolean;
  bgColor?: string;
};

function Input({ value, onChange, invisible, bgColor }: InputProps) {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      invisible={invisible}
      bgColor={bgColor}
    />
  );
}

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.invisible &&
    css`
      border: none;
      :focus {
        border: none;
        outline: none;
      }
    `}
  background-color: ${(props) => props.bgColor || 'white'};
`;
export default Input;
