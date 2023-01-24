import { styled } from '@stitches/react';
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

const StyledButton = styled('button', {
  color: 'gray',
  backgroundColor: 'yellow',
  variants: {
    disabled: {
      true: {
        color: 'red',
      },
    },
  },
});
