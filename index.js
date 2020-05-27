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
            console.log('there was an error posting to the database:', err)
            res.status(500).json({ message: 'Could not post to database.'})
        })
})

server.get('/api/cars', (req, res) => {
    db('cars')
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log('there was an error getting from the database:', err)
            res.status(500).json({ message: 'Could not get from database.'})
        })
})

const port = 5000

server.listen(port, () => {
    console.log(`\n*** Server Running on port ${port} ***\n`)
})