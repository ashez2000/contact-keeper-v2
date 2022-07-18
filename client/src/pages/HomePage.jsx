import { useNavigate } from 'react-router-dom'
import ContactList from '../components/ContactList'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="d-flex my-3">
        <input
          className="form-control"
          type="text"
          placeholder="Search Contacts"
        />
        <div className="mx-2" />
        <button
          className="btn btn-sm btn-primary"
          onClick={() => navigate('/create')}
        >
          Create
        </button>
      </div>

      {/* <ContactList /> */}
    </div>
  )
}

export default HomePage
