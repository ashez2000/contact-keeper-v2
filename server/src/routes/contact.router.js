const express = require('express')
const contactController = require('../controllers/contact.controller')
const { protect } = require('../middlewares/auth.middleware')

const router = express.Router()

router.use(protect)

router
  .route('/')
  .get(contactController.getContacts)
  .post(contactController.createContact)

router
  .route('/:id')
  .get(contactController.getContact)
  .put(contactController.updateContact)
  .delete(contactController.deleteContact)

module.exports = router
