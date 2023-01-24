import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'styled-components-ui';

export default function Hello() {
  const [disabled, setDisabled] = useState<true>();

  return (
    <>
      <p>
        <Link href="/">home</Link>
      </p>
      <Paragraph>hello</Paragraph>
      <p>
        <Button disabled={disabled} onClick={() => setDisabled(true)}></Button>
      </p>

      {disabled && <Dynamic>dynamic component</Dynamic>}
    </>
  );
}

const Paragraph = styled.p`
  line-height: 1rem;
`;

const Dynamic = styled.div`
  background-color: red;
`;
