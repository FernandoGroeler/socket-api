const { app, io } = require('./config/app')
require('./config/database')
const routes = require('./config/routes')
const chat = require('./sockets/chat')

routes(app)
chat(io)