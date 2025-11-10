import dotenv from "dotenv"
dotenv.config()
import mysql from "mysql2";

const conexao = mysql.createConnection({
  host: "mysql.railway.internal",
  port: 3306,
  user: "root",
  password: "nWByHrURQbxVFoGtAYXXMMnJisiRtdJQ",
  database: "presentes"
});

conexao.connect();
export default conexao;
