const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const errorHandler = require('./middlewares/error.middleware')
const contactRouter = require('./routes/contact.router')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/ping', (req, res) => {
  res.statusCode(200).send('Hello World')
})

app.use('/api/contacts', contactRouter)

app.use(errorHandler)

module.exports = app
