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

app.get("/content", (req, res) => {
  const query = `SELECT title, category, description, type_of_content, director, actors, path FROM content AS A join movies AS B ON A.id =
  content_id`
  pool.query(query, (err, results, fields) => {
    console.log(results);
    res.send(results);
  });
  // res.sendFile("assets/EnochArden_512kb.mp4", { root: __dirname });
});

// EnochArden_512kb.mp4

app.get("/:name", (req, res) => {
  res.sendFile(`assets/${req.params.name}`, { root: __dirname });
})

app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
});
