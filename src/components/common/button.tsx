import React from 'react';
import styled, { css } from 'styled-components';

interface IStyle {
  isRound?: boolean;
}

interface IProps extends IStyle {
  type?: 'submit' | 'button';
  onClick?: () => void;
}

const roundStyle = css<IStyle>`
  ${(props) =>
    props.isRound &&
    css`
      border-radius: 10px;
    `};
`;

const Wrapper = styled.button<IStyle>`
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${(props) => props.theme.darkGrey};

  & + & {
    margin-left: 1rem;
  }

  ${roundStyle}
`;

const Button: React.FC<IProps> = ({ children, type = 'button', onClick, isRound = false, ...rest }) => {
  return (
    <Wrapper isRound={isRound} {...rest} type={type} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;
