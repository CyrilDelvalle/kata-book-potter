const getPriceOfBooks = require("./services/getPriceOfBooks");
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
const books = require('./mockedData/books.json');

app.use(express.urlencoded());
app.use(express.json());


app.use(cors())
app.get('/books', (req, res) => {
    res.status(200).json(books)
})

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const book = books.find(parking => parking.tome === id)
    res.status(200).json(book)
})

app.post('/basket', (req, res) => {
    const price = getPriceOfBooks(req.body)
    res.status(200).json(price)
})

app.listen(port, () => {
    console.log("Serveur à l'écoute sur le port: " + port + " !")
})