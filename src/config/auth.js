const jwt = require('jsonwebtoken')

const env = require('./env')

module.exports = (req, res, next) => {
  //-> Pedido de comparação - CORS
  if (req.method === 'OPTIONS') {
    next()
  } else {
    const token = req.body.token || req.query.token || req.headers['authorization']

    //-> Caso não for fornecido um token
    if (!token) {
      return res.status(403).send({ errors: ['Nenhum token fornecido.'] })
    }

    //-> Verificando o token
    jwt.verify(token, env.authSecret, (err, decoded) => {
      if (err) {
        return res.status(403).send({ errors: ['Falha ao autenticar o token.'] })
      } else {
        req.decoded = decoded
        next()
      }
    })
  }
}