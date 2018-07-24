const mongoose = new require('mongoose')

const avatarSchema = new mongoose.Schema({
  file_location: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Avatar', avatarSchema)