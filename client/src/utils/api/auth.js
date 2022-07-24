import axios from 'axios'

const auth = axios.create({
  baseURL: '/api/auth',
})

export const loginUser = (email, password) => {
  return auth.post('/login', { email, password })
}

export const registerUser = (name, email, password) => {
  return auth.post('/signup', { name, email, password })
}

export const getUser = () => {
  return auth.get('/getuser', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  })
}
