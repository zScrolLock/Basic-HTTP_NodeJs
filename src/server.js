const port = 5000
const express = require('express') 
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({ extended: true })) //Pega as propriedades do Body Parse e trata para um Object 


app.get('/produtos', (req, res, next) => { //pega a lista de produtos
     res.send(database.getAllProducts()) //Converte para JSON
}).listen(port, (console.log(`Servidor executando na porta ${port}.`)))

app.get('/produtos/:id', (req, res, next) => { //Passa o ID por parametro na URL 
    res.send(database.searchbyId(req.params.id));
})

app.post('/produtos',(req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //Todo res gera um JSON
})

app.put('/produtos/:id',(req, res, next) => {
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //Todo res gera um JSON
})

app.delete('/produtos/:id', (req, res, next) =>{
    res.send(database.deleteProduct(req.params.id))
})

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1')
//     next()
// })

// app.get('/produtos', (req, res, next) => {
//     res.send({ nome: 'PC Gamer', preco: 5000.00 }) //Converte para JSON
// }).listen(port, (console.log(`Servidor executando na porta ${port}.`)))

// app.post('/produtos', (req, res, next) => {
//     res.send({ nome: 'PC Gamer', preco: 5000.00 }) //Converte para JSON
// }).listen(port, (console.log(`Servidor executando na porta ${port}.`)))

