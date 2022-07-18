import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return props.children
}

export default PrivateRoute
