const express = require('express')

const authController = require('../controllers/auth.controller')
const { protect } = require('../middlewares/auth.middleware')

const router = express.Router()

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.get('/getuser', protect, authController.getUser)

module.exports = router
