import express from 'express'
import cors from 'cors'
import conexao from './conexao.js'

const app = express()
app.use(express.json()) 

app.use(cors())

app.get('/presentes', (req, res) => {
    const sql = "SELECT * FROM presentes"
    conexao.query(sql, (erro, resultado) =>{
        if(erro){
            console.log(erro);
            res.status(404).json('erro')
        }else{
            res.status(200).json(resultado)
        }
    })
  })

  app.get('/pixpresente', (req, res) => {
    const sql = "SELECT * FROM pixpresente"
    conexao.query(sql, (erro, resultado) =>{
        if(erro){
            console.log(erro);
            res.status(404).json('erro')
        }else{
            res.status(200).json(resultado)
        }
    })
  })

app.get('/presentes/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM presentes WHERE id=?"
    conexao.query(sql, id, (erro, resultado) =>{
        const posicao = resultado[0]
        if(erro){
            console.log(erro);
            res.status(404).json('erro')
        }else{
            res.status(200).json(posicao)
        }
    })
})

app.post('/pixpresente', (req, res) => {
    //res.json(buscarPresentePorId(req.params.id))
    const pix = req.body
    const sql = "INSERT INTO pixpresente SET ?"
    
    conexao.query(sql, pix, (erro, resultado) =>{
        if(erro){
            console.log(erro);
            res.status(404).json('erro')
        }else{
            res.status(201).json(resultado)
        }
    })
})

app.put('/presentes/:id', (req, res) => {
    const id = req.params.id
    const presente = req.body
    const sql = "UPDATE presentes SET ? WHERE id=?"
    conexao.query(sql, [presente, id], (erro, resultado) =>{
        if(erro){
            console.log(erro);
            res.status(404).json('erro')
        }else{
            res.status(200).json(resultado)
        }
    })
})

export default app

