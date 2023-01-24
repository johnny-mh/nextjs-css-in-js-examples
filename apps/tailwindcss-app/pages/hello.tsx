import Link from 'next/link';
import { useState } from 'react';
import { Button } from 'tailwindcss-ui';

export default function Hello() {
  const [disabled, setDisabled] = useState<true>();

  return (
    <>
      <p>
        <Link href="/">home</Link>
      </p>
      <p className="leading-4">hello</p>
      <p>
        <Button disabled={disabled} onClick={() => setDisabled(true)}></Button>
      </p>

      {disabled && <div className="bg-red-600">dynamic component</div>}
    </>
  );
}
