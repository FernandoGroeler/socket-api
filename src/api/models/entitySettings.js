const mongoose = require('mongoose')

const entitySettingsSchema = new mongoose.Schema({
  only_admin_can_add_user: {
    type: Boolean,
    default: true,
    required: true
  },
  only_admin_can_add_server: {
    type: Boolean,
    default: true,
    required: true    
  },
  entity_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entity'
  }  
})

module.exports = mongoose.model('Entity_Settings', entitySettingsSchema)