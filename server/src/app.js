const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const errorHandler = require('./middlewares/error.middleware')
const contactRouter = require('./routes/contact.router')
const authRouter = require('./routes/auth.router')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'web_build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'web_build', 'index.html'))
})

app.get('/ping', (req, res) => {
  res.statusCode(200).send('Hello World')
})

app.use('/api/contacts', contactRouter)
app.use('/api/auth', authRouter)

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    error: `Can't find ${req.originalUrl} on this server!`,
  })
})

app.use(errorHandler)

module.exports = app
