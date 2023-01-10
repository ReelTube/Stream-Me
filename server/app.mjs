import express from "express"
import pool from "./mysql.mjs"


const app = express()

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Test")
})


app.listen(PORT, () => {
    console.log(`Connected to port: ${PORT}`)
})