import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const navigate = useNavigate()
  const params = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch(`/api/contacts/${params.id}`, {
      method: 'PUT',
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/contacts/${params.id}`)
      const data = await res.json()
      const contact = data.data.contact

      setName(contact.name)
      setEmail(contact.email)
      setPhone(contact.phone)
    }

    fetchData()
  }, [])

  const handleDelete = async () => {
    await fetch(`/api/contacts/${params.id}`, {
      method: 'DELETE',
    })

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

        <button className="btn btn-warning">Update</button>
        <span className="mx-2" />
        <button className="btn btn-danger" type="button" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </div>
  )
}

export default EditPage
