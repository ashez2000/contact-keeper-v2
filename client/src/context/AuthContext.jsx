import { createContext, useContext, useState, useEffect } from 'react'
import { getUser } from '../utils/api/auth'

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => {},
  setUser: () => {},
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUser().then((res) => {
      if (res.data) {
        setIsAuthenticated(true)
        setUser(res.data.user)
      }
    })
  }, [])

  const value = {
    isAuthenticated,
    user,
    setIsAuthenticated,
    setUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
