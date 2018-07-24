const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 2,
    max: 30,
    required: true
  },
  email: {
    type: String,
    min: 7,
    max: 60,
    required: true
  },
  password: {
    type: String,
    min: 6,
    max: 12,
    required: true
  },
  avatar_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Avatar'
  }
})

module.exports = mongoose.model('User', userSchema)