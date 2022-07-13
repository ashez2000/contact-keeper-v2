import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
    })

    setName('')
    setEmail('')
    setPhone('')

    navigate('/')
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-3">Create new contact</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Ph. Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CreatePage
