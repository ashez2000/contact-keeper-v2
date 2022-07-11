import { useNavigate } from 'react-router-dom'

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
    </div>
  )
}

export default HomePage
