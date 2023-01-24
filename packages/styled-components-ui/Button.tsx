import { MouseEvent } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  disabled?: true;
  onClick?: (e: MouseEvent) => unknown;
}

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props} onClick={props?.onClick}>
      Boop
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #eee;
    color: #aaa;
  `}
`;
