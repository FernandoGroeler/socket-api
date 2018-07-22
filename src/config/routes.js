const express = require('express')

const auth = require('./auth')

module.exports = app => {
  //-> Rotas protegidas por token

  const protectedApi = express.Router()

  app.use('/api', protectedApi)

  protectedApi.use(auth)

  /*
    Exemplo: 
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles')
  */

  //-> Rotas abertas
  const openApi = express.Router()
  app.use('/oapi', openApi)

  /*
    Exemplo:
    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)    
  */  
}