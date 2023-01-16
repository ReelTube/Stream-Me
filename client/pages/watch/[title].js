import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { Container } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"


export default function VideoPage() {

  const[path, setPath] = useState()
  const[titles, setTitles] = useState()

  const router = useRouter()

  const { title } = router.query
  


  const url = `http://localhost:5000/${title}.mp4`


  async function test() {
    const response = await axios(`http://localhost:5000/content`)
    const results = response.data

    for(let i = 0; i < results.length; i++){
      console.log(title)
      if(results[i].title === title){
        console.log("Found")
        console.log(results[i].path)
        setTitles(results.title)
        setPath(results.path)
        return
      } else {
        console.log("None Found");
      }
    }

    console.log(results)
  }

  useEffect(() => {
    test();
  },[title])


  return (
    <>
      <Head>
        <title>Watching</title>
      </Head>

      <h1 className="single-view-center">{title}</h1>
      <Container className="center-player">
        <ReactPlayer
          className="player"
          url={url}
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
