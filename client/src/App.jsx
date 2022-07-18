import { Routes, Route } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import LoginPage from './pages/LoginPage'
import EditPage from './pages/EditPage'

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/create"
            element={
              <PrivateRoute>
                <CreatePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <PrivateRoute>
                <EditPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
