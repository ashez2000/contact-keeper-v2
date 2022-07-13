const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A contact must have a name'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
  },
})

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact
