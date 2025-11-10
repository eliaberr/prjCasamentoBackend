import dotenv from "dotenv"
dotenv.config()
import mysql from "mysql2";

const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conexao.connect();

export default conexao;
