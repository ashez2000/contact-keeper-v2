const API_URL = '/api'

const getAllContacts = async () => {
  const response = await fetch(`${API_URL}/contacts`)
  return response.json()
}

const getContact = async (id) => {
  const response = await fetch(`${API_URL}/contacts/${id}`)
  return response.json()
}

const createContact = async (contact) => {
  const response = await fetch(`${API_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  })

  return response.json()
}

const updateContact = async (id, contact) => {
  const response = await fetch(`${API_URL}/contacts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  })

  return response.json()
}

const deleteContact = async (id) => {
  const response = await fetch(`${API_URL}/contacts/${id}`, {
    method: 'DELETE',
  })

  return response.json()
}

export {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
}
