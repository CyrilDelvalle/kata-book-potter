const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const books = require('./mockedData/books.json')

app.get('/books', (req, res) => {
    res.status(200).json(books)
})

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const book = books.find(parking => parking.tome === id)
    res.status(200).json(book)
})

app.listen(port, () => {
    console.log("Serveur à l'écoute sur le port: " + port + " !")
})