const http = require('http')
const dotenv = require('dotenv').config()
const app = require('./app')

const server = http.createServer(app)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
