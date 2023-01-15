import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { Container } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"


export default function VideoPage() {

  const[path, setPath] =useState();
  async function test() {
    const response = await axios("http://localhost:5000/content")
    const results = response.data[0].path
    setPath(results)
    console.log(results)
  }

  useEffect(() => {
    test();
  },[])

  test();

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
          url={path}
          playing={true}
          muted={true}
          controls={true}
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
