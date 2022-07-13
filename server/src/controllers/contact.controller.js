const Contact = require('../models/contact.model')
const asyncHandler = require('../utils/async-handler.utils')
const AppError = require('../utils/app-error.utils')

/**
 * @description This function is used to get all contacts
 * @route GET /api/contacts
 */
const getContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.find()
  return res.status(200).json({ status: 'success', data: { contacts } })
})

/**
 * @description This function is used to create a new contact
 * @route POST /api/contacts
 */
const createContact = asyncHandler(async (req, res, next) => {
  const { name, email, phone } = req.body
  const contact = await Contact.create({
    name,
    email,
    phone,
  })

  return res.status(201).json({ status: 'success', data: { contact } })
})

/**
 * @description This function is used to get a contact by id
 * @route GET /api/contacts/:id
 */
const getContact = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const contact = await Contact.findById(id)

  if (!contact) {
    return next(new AppError(`No contact found with this id:${id}`, 404))
  }

  return res.status(200).json({ status: 'success', data: { contact } })
})

/**
 * @description This function is used to update a contact
 * @route PUT /api/contacts/:id
 */
const updateContact = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const { name, email, phone } = req.body
  const contact = await Contact.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
    },
    { new: true }
  )

  if (!contact) {
    return next(new AppError(`No contact found with this id:${id}`, 404))
  }

  return res.status(200).json({ status: 'success', data: { contact } })
})

/**
 * @description This function is used to delete a contact
 * @route DELETE /api/contacts/:id
 */
const deleteContact = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const contact = await Contact.findByIdAndDelete(id)

  if (!contact) {
    return next(new AppError(`No contact found with this id:${id}`, 404))
  }

  return res.status(200).json({ status: 'success', data: { contact } })
})

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
}
