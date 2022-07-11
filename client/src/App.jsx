import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
