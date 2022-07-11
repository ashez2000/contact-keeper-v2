const LoginPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-3">Login</h1>
      <form className="w-25">
        <input className="form-control mb-3" type="email" placeholder="Email" />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
        />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
