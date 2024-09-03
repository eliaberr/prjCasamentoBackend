import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json()) 


app.use(cors())



const presentes = [
    {
        'id':1,
        'nomePresente': 'Liquidificador',
        'price': 15,
        'disponivel': true,
        'telefoneDoUser': "null"
    },
    {
        'id':2,
        'nomePresente': 'Batedeira',
        'price': 20,
        'disponivel': true,
        'telefoneDoUser': 'null'
    },
    {
        'id':3,
        'nomePresente': 'Maquina de Lavar',
        'price': 50,
        'disponivel': true,
        'telefoneDoUser': 'null'
    }
]

function buscarPresentePorId(id){
    return presentes.filter( presente => presente.id == id )
}

function buscarIndexPorId(id){
    return presentes.findIndex(presente => presente.id == id)
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

