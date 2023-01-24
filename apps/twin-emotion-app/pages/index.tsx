import Link from 'next/link';
import 'twin.macro';

export default function Home() {
  return (
    <>
      <p>
        <Link href="/hello">hello</Link>
      </p>
      <p tw="bg-blue-500">hello world</p>
    </>
  );
}
