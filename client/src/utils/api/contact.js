import axios from 'axios'

const contactApi = axios.create({
  baseURL: '/api/contacts',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
})

export const getContacts = () => contactApi.get('/')
export const getContact = (id) => contactApi.get(`/${id}`)
export const createContact = (contact) => contactApi.post('/', contact)
export const updateContact = (id, contact) => contactApi.put(`/${id}`, contact)
export const deleteContact = (id) => contactApi.delete(`/${id}`)
