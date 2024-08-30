import express from 'express'
const app = express()


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


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/presentes', (req, res) => {
    res.send(presentes)
  })

export default app

