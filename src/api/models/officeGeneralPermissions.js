const mongoose = require('mongoose')

const officeGeneralPermissionsSchema = new mongoose.Schema({
  administrator: {
    type: Boolean,
    default: false,
    required: true
  },
  view_audit_log: {
    type: Boolean,
    default: false,
    required: true
  },
  manage_server: {
    type: Boolean,
    default: false,
    required: true
  },
  manage_charge: {
    type: Boolean,
    default: false,
    required: true
  },
  manage_channel: {
    type: Boolean,
    default: false,
    required: true
  },
  remove_user: {
    type: Boolean,
    default: false,
    required: true
  },
  office_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Office'
  }    
})

module.exports = mongoose.model('Office_General_Permissions', officeGeneralPermissionsSchema)