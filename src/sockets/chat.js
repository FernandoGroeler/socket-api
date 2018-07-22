module.exports = io => {
  io.on('connection', socket => {
    console.log('Usuário conectado')
    socket.emit('news', { hello: 'hello world' })

    socket.on('disconnect', () => {
      console.log('Usuário desconectado')
    })

    socket.on('chat message', msg => {
      io.emit('chat message', msg)
    })

    socket.on('private message', (from, msg) => {
      
    })
  })
}