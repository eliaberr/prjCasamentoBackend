import express from 'express'
import cors from 'cors'
import conexao from './infra/conexao'

const app = express()
app.use(express.json()) 


app.use(cors())





function buscarPresentePorId(id){
    return presentes.filter( presente => presente.id == id )
}

function buscarIndexPorId(id){
    return presentes.findIndex(presente => presente.id == id)
}



app.get('/presentes', (req, res) => {
    //res.send(presentes)
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

app.get('/presentes/:id', (req, res) => {
    res.json(buscarPresentePorId(req.params.id))
})

app.post('/presentes', (req, res) => {
    presentes.push(req.body)
    res.status(200).send('Mensagem de Confirmação')
})

app.delete('/presentes/:id', (req, res) => {
    let index = buscarIndexPorId(req.params.id)
    presentes.splice(index, 1)
    res.status(201).send('excluido com sucesso')
})

app.put('/presentes/:id', (req, res) => {
    let index = buscarIndexPorId(req.params.id)

    presentes[index].telefoneDoUser = req.body.telefoneDoUser
    res.json(presentes)
})





export default app

