import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'
import { loginUser } from '../utils/api/auth'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { setIsAuthenticated, setUser, isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(email, password)
      setUser(res.data.user)
      setIsAuthenticated(true)
      localStorage.setItem('token', res.data.token)
    } catch (err) {
      alert(err.response.data.error)
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-3">Login</h1>
      <form onSubmit={handleSubmit} className="w-25">
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
