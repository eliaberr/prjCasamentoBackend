import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json()) 


app.use(cors())



const presentes = [
    {
        'id':1,
        'nomePresente': 'AirFray',
        'corDePreferencia': 'Preto',
        'price': 287,
        'link': 'https://www.magazineluiza.com.br/fritadeira-eletrica-sem-oleo-air-fryer-mondial-family-afn-40-bi-preto-4l-com-timer/p/228887100/ep/efso/?seller_id=magazineluiza&srsltid=AfmBOopB2zs9YpE0tjKEonU-Z85zq1t1Jc4iTjvhazcI6IHWhkhIWebwbDI',
        'entrega': 1,
        'urlImagem': 'https://media.discordapp.net/attachments/834490747020902430/1279903190225125387/c8c3b47783b851f54be2594719871282.webp?ex=66d6223c&is=66d4d0bc&hm=3abc6a12dbfd73bc07bd8a0a7396cf7980c9dd1ea6ee1bf76710959eae8f977d&=&format=webp&width=895&height=671',
        'telefoneDoUser': "null"
    },
    {
        'id':2,
        'nomePresente': 'Sanduicheira',
        'corDePreferencia': 'Preto',
        'price': 69,
        'link': 'https://www.magazineluiza.com.br/sanduicheira-eletrica-cadence-toast-e-grill-san260-750w/p/adfhh0895k/ep/gset/?seller_id=ebomdecomprar&srsltid=AfmBOorLoMSUWEQQttObcGkDmgpsD_HhtRjTDD3v_qw3VYiN4rvt-sZ_GEI&region_id=123481',
        'entrega': 1,
        'urlImagem': 'https://media.discordapp.net/attachments/834490747020902430/1279903226816368670/sanduicheira.webp?ex=66d62244&is=66d4d0c4&hm=68b1a316602d0032072f8607d6bc8d4f230449984fdecc31afd32e254ed6126f&=&format=webp&width=671&height=671',
        'telefoneDoUser': "null"
    },
    {
        'id':3,
        'nomePresente': 'Prato',
        'corDePreferencia': 'Sem Preferência',
        'price': 35,
        'link': 'https://www.mercadolivre.com.br/jogo-c-6-pratos-fundo-duralex-diamante-transparente-nadir/p/MLB22636733?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&item_id=MLB4904154066&from=gshop',
        'entrega': 1,
        'urlImagem': 'https://media.discordapp.net/attachments/834490747020902430/1279904717828522087/prato.webp?ex=66d623a8&is=66d4d228&hm=e345e67473f9531809ae8c376ba7a61f265b028b2b67a78afe84c8a80c7c3871&=&format=webp&width=634&height=671',
        'telefoneDoUser': "null"
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

