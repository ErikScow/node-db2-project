const express = require('express')
const db = require('./db-config')

server = express()

server.use(express.json())

server.post('/api/cars', (req, res) => {
    db('cars').insert(req.body)
        .then(x => {
            res.status(201).json(x)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Could not post to database'})
        })
})

server.get('/api/cars', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Could not get from database'})
        })
})

port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`\n*** Server running on port ${port} *** \n`)
})