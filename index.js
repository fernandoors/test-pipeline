require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.send(`Boa docker compose ${process.env.MESSAGE}`)
})

app.listen(process.env.NODE_PORT)