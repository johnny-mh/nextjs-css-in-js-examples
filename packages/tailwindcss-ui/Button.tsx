import clsx from 'clsx';
import { MouseEvent } from 'react';

interface ButtonProps {
  disabled?: true;
  onClick?: (e: MouseEvent) => unknown;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={clsx(
        ['bg-slate-500', 'text-slate-600'],
        props.disabled && 'text-slate-300'
      )}
      onClick={props?.onClick}
    >
      Boop
    </button>
  );
};
