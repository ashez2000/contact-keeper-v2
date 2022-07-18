import { createContext, useContext, useEffect, useState } from 'react'
import { getuser } from '../utils/api'

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const value = {
    isAuthenticated,
    user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
