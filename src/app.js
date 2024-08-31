import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())



const presentes = [
    {
        'id':1,
        'nomePresente': 'Liquidificador',
        'price': 15,
        'disponivel': true,
        'telefoneDoUser': '11951285687'
    },
    {
        'id':2,
        'nomePresente': 'Batedeira',
        'price': 20,
        'disponivel': true,
        'telefoneDoUser': '11951285687'
    },
    {
        'id':3,
        'nomePresente': 'Maquina de Lavar',
        'price': 50,
        'disponivel': true,
        'telefoneDoUser': '11951285687'
    }
]

function buscarPresentePorId(id){
    return presentes.filter( presente => presente.id == id )
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/presentes', (req, res) => {
    res.send(presentes)
  })

app.get('/presentes/:id', (req, res) => {
    res.json(buscarPresentePorId(req.params.id))
})

export default app

