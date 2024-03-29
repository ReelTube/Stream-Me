import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { Container } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function VideoPage() {
  const [path, setPath] = useState();
  const [titles, setTitles] = useState();
  const [director, setDirector] = useState();
  const [actors, setActors] = useState();
  const [id, setId] = useState();

  const router = useRouter();
  const { title } = router.query;
  const url = `http://localhost:5000/movies/${title}.mp4`;

  async function test() {
    const response = await axios(`http://localhost:5000/movies`);
    const results = response.data;

    for (let i = 0; i < results.length; i++) {
      if (results[i].title === title) {
        console.log("Ready!!!");
        setTitles(results[i].title);
        setPath(results[i].path);
        setDirector(results[i].director);
        setActors(results[i].actors);
        setId(results[i].id);
      } else {
        console.log("Searching...");
      }
    }
  }

  useEffect(() => {
    test();
  }, [title]);

  return (
    <>
      <Head>
        <title>Watching</title>
      </Head>
      <div key={id}>
        <h1 className="single-view-center">{title}</h1>
        <Container className="center-player">
          <ReactPlayer
            className="player"
            url={url}
            playing={true}
            muted={false}
            controls={true}
          />
        </Container>
        <ul>
          <div className="contain-single">
            <div>
              <li>Title: {title}</li>
              <li>Director: {director}</li>
              <li>Actors: {actors}</li>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
