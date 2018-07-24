const mongoose = new require('mongoose')

const officeTextPermissionsSchema = new mongoose.Schema({
  send_message: {
    type: Boolean,
    default: true,
    required: true
  },
  manage_message: {
    type: Boolean,
    default: false,
    required: true
  },
  insert_link: {
    type: Boolean,
    default: true,
    required: true
  },
  attach_file: {
    type: Boolean,
    default: true,
    required: true
  },
  mention_all: {
    type: Boolean,
    default: true,
    required: true
  },
  office_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Office'
  }
})

module.exports = mongoose.model('Office_Text_Permissions', officeTextPermissionsSchema)