import Head from "next/head";
import Link from "next/link";
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function VideoPage() {
  return (
    <>
      <Head>
        <title>Watching</title>
      </Head>
      <h1 className="single-view-center">Money Ball</h1>
      <div className="center-player">
        <ReactPlayer url="https://www.youtube.com/watch?v=JjX9L9Qtjvo" />
      </div>
      <ul>
        <div className="contain-single">
          <div>
            <li>Title:</li>
            <li>Director:</li>
            <li>Actors:</li>
            <li>Year:</li>
          </div>
        </div>
      </ul>
    </>
  );
}
