import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getContacts } from '../utils/api/contact'

const ContactList = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    getContacts().then((res) => {
      setContacts(res.data.contacts)
    })
  }, [])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Ph. Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, idx) => (
            <ContactItem key={contact._id} contact={contact} idx={idx + 1} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const ContactItem = ({ contact, idx }) => {
  const navigate = useNavigate()

  return (
    <tr onClick={() => navigate(`/edit/${contact._id}`)}>
      <th scope="row">{idx}</th>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  )
}

export default ContactList
