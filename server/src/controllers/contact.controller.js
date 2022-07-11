const Contact = require('../models/contact.model')

const getContacts = async (req, res) => {
  const contacts = await Contact.find()
  res.json({ contacts })
}

const createContact = async (req, res) => {
  const { name, email, phone } = req.body
  const newContact = new Contact({ name, email, phone })
  await newContact.save()

  return res.json({ newContact })
}

const getContact = async (req, res) => {
  const { id } = req.params
  const contact = await Contact.findById(id)

  return res.json({ contact })
}

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
