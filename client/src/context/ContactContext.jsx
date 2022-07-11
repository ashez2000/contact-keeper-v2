import { createContext, useContext } from 'react'

export const ContactContext = createContext()

export const useContactContext = () => {
  return useContext(ContactContext)
}

export const ContactProvider = ({ children }) => {
  const value = {}

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  )
}
