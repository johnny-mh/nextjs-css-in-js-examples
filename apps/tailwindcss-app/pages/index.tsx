import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p>
        <Link href="/hello">hello</Link>
      </p>
      <p className="bg-blue-500">hello world</p>
    </>
  );
}
