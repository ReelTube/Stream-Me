import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { Container } from "@mui/material";

export default function VideoPage() {
  return (
    <>
      <Head>
        <title>Watching</title>
      </Head>
      <h1 className="single-view-center">Money Ball</h1>
        <Container className="center-player">
          <div></div>
          <ReactPlayer
            className="player"
            url="https://www.youtube.com/watch?v=JjX9L9Qtjvo"
            playing={true}
            muted={true}
          />
        </Container>
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
