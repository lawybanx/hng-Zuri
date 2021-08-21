const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
var contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now(),
  },
});

//Export the model
module.exports = mongoose.model('Contact', contactSchema);
