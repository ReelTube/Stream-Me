import Head from "next/head";
import Link from "next/link";

export default function VideoPage() {
  return (
    <>
      <Head>
        <title>Watching</title>
      </Head>
      <h1>Money Ball</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}
