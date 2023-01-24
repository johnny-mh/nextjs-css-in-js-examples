import Link from 'next/link';

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
