const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Contact = require('../src/models/contact.model')
const User = require('../src/models/user.model')

dotenv.config()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connection successful!'))

// IMPORT DATA INTO DB
const importData = () => {
  process.exit()
}

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Contact.deleteMany()
    await User.deleteMany()
    console.log('Data successfully deleted!')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

if (process.argv[2] === '-i') {
  importData()
} else if (process.argv[2] === '-d') {
  deleteData()
}
