import express from "express";
import pool from "./mysql.mjs";
import fs from "fs";
import path from "path";
import cors from "cors";

const __dirname = path.resolve();

const app = express();

const PORT = 5000;

app.use(cors());


app.use(express.json())

app.get("/", (req, res) => {
  res.send("Test");
});

app.get("/movies", (req, res) => {
  const query = `SELECT title, category, description, type_of_content, director, actors, path FROM content AS A join movies AS B ON A.id =
  content_id WHERE type_of_content = 'movie'`
  pool.query(query, (err, results, fields) => {
    console.log(results);
    res.send(results);
  });
});

app.get("/shows", (req, res) => {
  const query = `SELECT title, category, description, type_of_content, director, actors, path FROM content AS A join movies AS B ON A.id =
  content_id WHERE type_of_content = 'show'`
  pool.query(query, (err, results, fields) => {
    console.log(results);
    res.send(results);
  });
});

// EnochArden_512kb.mp4

app.get("/movies/:name", (req, res) => {
  res.sendFile(`assets/movies/${req.params.name}`, { root: __dirname });
})

app.get("/shows/:name", (req, res) => {
  res.sendFile(`assets/movies/${req.params.name}`, { root: __dirname });
})

app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
});
