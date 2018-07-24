const mongoose = require('mongoose')

const entitySchema = new mongoose.Schema({
  name: {
    type: String,
    min: 2,
    max: 60,
    required: true
  },
  users: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  servers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Server'
  }] 
})

module.exports = mongoose.model('Entity', entitySchema)