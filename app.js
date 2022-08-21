const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

const data = require('./data.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/people', (req, res) => {
    res.json(data.people)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})