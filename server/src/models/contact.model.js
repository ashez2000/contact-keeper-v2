const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A contact must have a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact
