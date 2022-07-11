const CreatePage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-3">Create new contact</h1>
      <form className="w-50">
        <input className="form-control mb-3" type="text" placeholder="Name" />
        <input className="form-control mb-3" type="email" placeholder="Email" />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Ph. Number"
        />

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CreatePage
