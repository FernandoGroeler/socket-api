const mongoose = require('mongoose')

const env = require('./env')

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : env.localDbHost

mongoose.Promise = global.Promise

//-> Falhas genéricas
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE} não é valido para o atributo '{PATH}'."

//-> Falhas de conexão
const database = mongoose.connection

database.on('error', error => console.log('Conexão ao banco Socket falhou:', error))
database.on('connected', () => console.log('Conectado ao banco Socket'))
database.on('disconnected', () => console.log('Desconectado do banco Socket'))

process.on('SIGINT', () => {
  database.close(() => {
    console.log('Banco Socket teve a conexão fechada')
    process.exit(0)
  })
})

var options = { useNewUrlParser: true } //-> useNewUrlParser: para utilização da porta na string de conexão do banco de dados

module.exports = mongoose.connect(url, options)