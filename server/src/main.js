const http = require('http')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

const server = http.createServer(app)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connection successful!'))

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
