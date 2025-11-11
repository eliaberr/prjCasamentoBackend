import mysql from "mysql2";

const conexao = mysql.createConnection({
  host: "gondola.proxy.rlwy.net",
  port: 25117,
  user: "root",
  password: "nWByHrURQbxVFoGtAYXXMMnJisiRtdJQ",
  database: "presentes"
});

conexao.connect();
export default conexao;
