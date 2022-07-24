import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const { isAuthenticated, setUser, setIsAuthenticated } = useAuth()

  const handleLogout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('token')
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            ContactKeeper
          </Link>

          <ul className="navbar-nav">
            {!isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item cursor-pointer">
                <span className="nav-link" onClick={handleLogout}>
                  Logout
                </span>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
