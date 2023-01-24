import tw, { styled } from 'twin.macro';
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

const StyledButton = styled.button({
  ...tw`bg-yellow-200 text-gray-500`,
  variants: {
    disabled: { true: tw`text-red-600` },
  },
});

// const StyledButton = styled.button<ButtonProps>`
//   background-color: #eee;
//   color: #aaa;

//   ${({ disabled }) => disabled && tw`text-red-600`}
// `;
