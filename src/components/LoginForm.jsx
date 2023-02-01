import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = ({ handleLogin, handleLoginChange, authStatus }) => {
  const [showPword, setShowPword] = useState(false);

  const handleClick = () => {
    setShowPword(prev => !prev)
  }

  
  return (
      <form onSubmit={handleLogin} className="login full-w">
        <div className="flex-row form-quest align-items-center full-w">
            <p className="form-text">Don't have an account? <span className="form-link"><Link to="/register">Register</Link></span></p>
            <h1 className="logo">cardStore</h1>
        </div>
        <h2 className="title full-border full-w">Login</h2>
        <p id="error" className="bad full-w">
          {authStatus.toString()}
        </p>
        <div className="inputs flex-col">
            <input type="text" name="username" id="username" placeholder="Username" onChange={handleLoginChange} />
            <div className="pword_input flex-row align-items-flexend">
                <input type={showPword ? 'text': 'password'} name="password" id="password" placeholder="Password" onChange={handleRegisterChange} />
                <button className="change_input_type flex-row justify-content-center align-items-center" type="button" onClick={handleClick}>
                {
                  showPword ?
                  <BiHide /> :
                  <BiShow />
                }
              </button>
            </div>
        </div>
        <button className="full-w">Log In</button>
    </form>
  )
}

export default LoginForm
