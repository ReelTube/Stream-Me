import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const pool = mysql2.createPool({
  host: process.env.HOST,
  // port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 100,
  multipleStatements: true,
});

pool.getConnection((err, connection) => {
  console.log("Connected!");
});

export default pool;
