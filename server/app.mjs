import express from "express";
import pool from "./mysql.mjs";
import fs from "fs";
import path from "path";
import cors from "cors";

const __dirname = path.resolve();

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Test");
});

app.get("/content", (req, res) => {
  res.sendFile("assets/EnochArden_512kb.mp4", { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
});
