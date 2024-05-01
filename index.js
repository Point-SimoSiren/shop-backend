const express = require('express')
const app = express()
const PORT = process.env.PORT  || 3000
var cors = require('cors')
const Items = require('./Items.json')
app.use(cors())

//GET ALL etsitään kaikki tuotteet jsonista
app.get('/api/items', (req, res) => {
    res.json(Items)
    })

app.listen(PORT, () => console.log("Server is up on port " + PORT))

