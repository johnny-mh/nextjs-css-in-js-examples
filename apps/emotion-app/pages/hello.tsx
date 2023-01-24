import Link from 'next/link';
import { useState } from 'react';
import { css } from '@emotion/react';
import { Button } from 'emotion-ui';

export default function Hello() {
  const [disabled, setDisabled] = useState<true>();

  return (
    <>
      <p>
        <Link href="/">home</Link>
      </p>
      <p
        css={css`
          line-height: 1rem;
        `}
      >
        hello
      </p>
      <p>
        <Button disabled={disabled} onClick={() => setDisabled(true)}></Button>
      </p>

      {disabled && (
        <div
          css={css`
            background-color: red;
          `}
        >
          dynamic component
        </div>
      )}
    </>
  );
}
