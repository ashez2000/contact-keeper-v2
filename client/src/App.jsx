import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <section className="d-flex my-3">
          <input
            className="form-control"
            type="text"
            placeholder="Search Contacts"
          />
          <div className="mx-2" />
          <button className="btn btn-sm btn-primary">Create</button>
        </section>
      </main>
    </>
  )
}

export default App
