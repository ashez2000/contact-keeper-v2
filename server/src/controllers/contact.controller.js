const Contact = require('../models/contact.model')

/**
 * @description This function is used to get all contacts
 * @route GET /api/contacts
 */
const getContacts = async (req, res) => {
  const contacts = await Contact.find()
  res.json({ contacts })
}

/**
 * @description This function is used to create a new contact
 * @route POST /api/contacts
 */
const createContact = async (req, res) => {
  const { name, email, phone } = req.body
  const newContact = new Contact({ name, email, phone })
  await newContact.save()

  return res.json({ newContact })
}

/**
 * @description This function is used to get a contact by id
 * @route GET /api/contacts/:id
 */
const getContact = async (req, res) => {
  const { id } = req.params
  const contact = await Contact.findById(id)

  return res.json({ contact })
}

/**
 * @description This function is used to update a contact
 * @route PUT /api/contacts/:id
 */
const updateContact = async (req, res) => {
  const { id } = req.params
  const { name, email, phone } = req.body
  const updatedContact = await Contact.findByIdAndUpdate(id, {
    name,
    email,
    phone,
  })

  return res.json({ updatedContact })
}

/**
 * @description This function is used to delete a contact
 * @route DELETE /api/contacts/:id
 */
const deleteContact = async (req, res) => {
  const { id } = req.params
  await Contact.findByIdAndDelete(id)

  return res.json({ message: 'Contact deleted' })
}

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
}
