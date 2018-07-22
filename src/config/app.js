const bodyParser = require('body-parser')
const express = require('express')
const queryParser = require('express-query-int')
const http = require('http')
const socketIo = require('socket.io')

const cors = require('./cors')

const app = express()
const server = http.Server(app)
const io = socketIo(server)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors)
app.use(queryParser())

const port = process.env.PORT || 3003

server.listen(port, () => {
  console.log(`Backend is running on port ${port}.`)
})

module.exports = { app, server, io }