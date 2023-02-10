import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerAuth, passwordAuth, registerReq } from '../assets/functions/register';
import { RegisterForm } from '../components';
import '../styles/login/login.css'

const Register = () => {
  const [register, setRegister] = useState({first_name: '', middle_name: '', last_name: '', email: '', phone: '', age: '', address: '', bank: '', account_number: '', username: '', password: '', confirmPword: ''});
  const [pwordCheck, setPwordCheck] = useState('')
  const [authStatus, setAuthStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    const inputName = e.target.getAttribute('name');
      
    setRegister(prev => ({...prev, [inputName]: e.target.value}))
  }
  
  const handleRegister = (e) => {
    e.preventDefault()
    registerReq(register, setAuthStatus, navigate, setLoading)
  }

  useEffect( () => {
    setPwordCheck(passwordAuth(register.password, register.confirmPword))
  }, [register])

  return (
    <div className="login-register full-w flex-col align-items-center justify-content-center">
      <RegisterForm 
        handleRegisterChange={handleRegisterChange} 
        handleRegister={handleRegister}
        pwordCheck={pwordCheck} 
        authStatus={authStatus} 
        loading={loading}
       />
    </div>
  )
}

export default Register
