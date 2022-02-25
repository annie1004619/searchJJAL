import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (x: unknown) => void;
  iconStyle?: boolean;
  width?: string;
  disabled?: boolean;
};

type StyledButtonProps = {
  iconStyle?: boolean;
  width?: string;
};
function Button({
  onClick,
  children,
  iconStyle,
  width,
  disabled,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      iconStyle={iconStyle}
      width={width}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  width: ${(props) => props.width || `auto`};
  text-align: center;
  display: flex;
  border: 1px solid #727272;
  background-color: white;
  padding: 0.4vh 0.5vw;
  border-radius: 5px;
  ${(props) =>
    props.iconStyle &&
    css`
      border: none;
      background-color: transparent;
    `};
`;
export default Button;
