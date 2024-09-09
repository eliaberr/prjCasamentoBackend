import mysql from 'mysql'

const conexao = mysql.createConnection({
    host:'181.215.253.124',
    port:'3306',
    user:'eliabe',
    password:'1533',
    database:'presentes'
})

conexao.connect()

export default conexao