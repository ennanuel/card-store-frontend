import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginForm } from "../components"
import { checkLogin } from "../assets/functions/login"

const Login = ({setUser}) => {
    const [login, setLogin] = useState({username: '', password: ''})
    const [authStatus, setAuthStatus] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault()
      checkLogin(login, setUser, setAuthStatus, navigate, setLoading)
    }

    const handleLoginChange = (e) => {
      setLogin(prev => ({...prev, [e.target.getAttribute('name')]: e.target.value}))
    }


    return (
        <div className="login-register relative full-w flex-col align-items-center justify-content-center">
          <LoginForm 
          handleLoginChange={handleLoginChange} 
          handleLogin={handleLogin} login={login} 
          authStatus={authStatus}
          loading={loading}
          />
        </div>
    )
}

export default Login
