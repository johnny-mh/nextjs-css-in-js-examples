import Link from 'next/link';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <p>
        <Link href="/hello">hello</Link>
      </p>
      <p>hello world</p>
    </>
  );
}

const HomeWrapper = styled.div`
  background-color: blue;
`;
