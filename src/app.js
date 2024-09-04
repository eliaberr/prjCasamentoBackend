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
        'escolha': 1,
        'urlImagem': 'https://res.cloudinary.com/dlvh3mmp8/image/upload/v1725409751/y1vyjgynopkczptz2mfh.png',
        'telefoneDoUser': "null"
    },
    {
        'id':2,
        'nomePresente': 'Sanduicheira',
        'corDePreferencia': 'Preto',
        'price': 69,
        'link': 'https://www.magazineluiza.com.br/sanduicheira-eletrica-cadence-toast-e-grill-san260-750w/p/adfhh0895k/ep/gset/?seller_id=ebomdecomprar&srsltid=AfmBOorLoMSUWEQQttObcGkDmgpsD_HhtRjTDD3v_qw3VYiN4rvt-sZ_GEI&region_id=123481',
        'escolha': 1,
        'urlImagem': 'https://res.cloudinary.com/dlvh3mmp8/image/upload/v1725409750/tuq9bvfht3mgqnakq06k.png',
        'telefoneDoUser': "null"
    },
    {
        'id':3,
        'nomePresente': 'Prato',
        'corDePreferencia': 'Sem Preferência',
        'price': 35,
        'link': 'https://www.mercadolivre.com.br/jogo-c-6-pratos-fundo-duralex-diamante-transparente-nadir/p/MLB22636733?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&item_id=MLB4904154066&from=gshop',
        'escolha': 1,
        'urlImagem': 'https://res.cloudinary.com/dlvh3mmp8/image/upload/v1725409751/swjxpmm2j8i8wrsvafh6.png',
        'telefoneDoUser': "null"
    },
    {
        'id':4,
        'nomePresente': 'AirFray',
        'corDePreferencia': 'Preto',
        'price': 287,
        'link': 'https://www.magazineluiza.com.br/fritadeira-eletrica-sem-oleo-air-fryer-mondial-family-afn-40-bi-preto-4l-com-timer/p/228887100/ep/efso/?seller_id=magazineluiza&srsltid=AfmBOopB2zs9YpE0tjKEonU-Z85zq1t1Jc4iTjvhazcI6IHWhkhIWebwbDI',
        'escolha': 1,
        'urlImagem': 'https://res.cloudinary.com/dlvh3mmp8/image/upload/v1725409751/y1vyjgynopkczptz2mfh.png',
        'telefoneDoUser': "null"
    },
    {
        'id':5,
        'nomePresente': 'Sanduicheira',
        'corDePreferencia': 'Preto',
        'price': 69,
        'link': 'https://www.magazineluiza.com.br/sanduicheira-eletrica-cadence-toast-e-grill-san260-750w/p/adfhh0895k/ep/gset/?seller_id=ebomdecomprar&srsltid=AfmBOorLoMSUWEQQttObcGkDmgpsD_HhtRjTDD3v_qw3VYiN4rvt-sZ_GEI&region_id=123481',
        'escolha': 1,
        'urlImagem': 'https://res.cloudinary.com/dlvh3mmp8/image/upload/v1725409750/tuq9bvfht3mgqnakq06k.png',
        'telefoneDoUser': "null"
    },
    {
        'id':6,
        'nomePresente': 'Prato',
        'corDePreferencia': 'Sem Preferência',
        'price': 35,
        'link': 'https://www.mercadolivre.com.br/jogo-c-6-pratos-fundo-duralex-diamante-transparente-nadir/p/MLB22636733?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&item_id=MLB4904154066&from=gshop',
        'escolha': 1,
        'urlImagem': 'https://res.cloudinary.com/dlvh3mmp8/image/upload/v1725409751/swjxpmm2j8i8wrsvafh6.png',
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

