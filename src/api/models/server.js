const mongoose = require('mongoose')

const serverSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 1,
    max: 30,
    required: true
  },
  avatar_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Avatar'
  }      
})

module.exports = mongoose.model('Server', serverSchema)