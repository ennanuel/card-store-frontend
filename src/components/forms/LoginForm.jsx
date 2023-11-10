import { Link } from 'react-router-dom';
import { Loading } from '../fetch_states';

const LoginForm = ({ username, password, handleSubmit, handleChange, error, loading }) => {

  return (
      <form onSubmit={handleSubmit} className="login full-w relative">
      {
        loading && 
        <div className="form_loading absolute flex-row full-w full-h ai-center jc-center"><Loading text="Please Wait..." /></div>
      }
        <div className="flex-row form-quest ai-center full-w">
            <p className="form-text">Don't have an account? <span className="form-link"><Link to="/register">Register</Link></span></p>
            <h1 className="logo">cardStore</h1>
        </div>
        <h2 className="title full-border full-w">Login</h2>
        <p id="error" className="bad full-w">{error}</p>
        <div className="inputs flex-col">
            <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={handleChange} />
            <div className="pword_input flex-row align-items-flexend relative">
                <input type='password' name="password" id="password" placeholder="Password" value={password} onChange={handleChange} />
            </div>
        </div>
        <button className="full-w">Log In</button>
    </form>
  )
}

export default LoginForm
