import styled from '@emotion/styled';
import { MouseEvent } from 'react';

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
