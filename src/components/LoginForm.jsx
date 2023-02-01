import { Link } from 'react-router-dom'

const LoginForm = ({ handleLogin, login, handleLoginChange, authStatus }) => {
  return (
      <form onSubmit={handleLogin} className="login full-w">
        <p className="flex-row form-quest align-items-center full-w">
            <p className="form-text">Don't have an account? <span className="form-link"><Link to="/register">Register</Link></span></p>
            <h1 className="logo">cardStore</h1>
        </p>
        <h2 className="title full-border full-w">Login</h2>
        <p id="error" className="bad full-w">
          {authStatus.toString()}
        </p>
        <div className="inputs flex-col">
            <input type="text" name="username" id="username" placeholder="Username" value={login.username} onChange={handleLoginChange} />
            <input type="password" name="password" id="password" placeholder="Password" value={login.password} onChange={handleLoginChange} />
        </div>
        <button className="full-w">Log In</button>
    </form>
  )
}

export default LoginForm
