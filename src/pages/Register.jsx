import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerAuth, passwordAuth, registerReq } from '../assets/auth/register';
import { RegisterForm } from '../components';
import '../styles/login/login.css'

const Register = () => {
  const [register, setRegister] = useState({names: { first: '', middle: '', last: '' }, email: '', username: '', password: '', phone: undefined, address: '', dob: undefined, account_number: undefined, bank: '', confirmPword: '', image: ''});
  const [pwordCheck, setPwordCheck] = useState('')
  const [authStatus, setAuthStatus] = useState('')
  const [fetchStatus, setFetchStatus] = useState('')

  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    const inputName = e.target.getAttribute('name');

    if(inputName === 'first_name' || inputName === 'middle_name' || inputName === 'last_name') {
      setRegister( prev => ({ names: {...prev.names, [inputName]: e.target.value}, ...prev}))
    } else {
      setRegister(prev => ({...prev, [inputName]: e.target.value}))
    }
  }
  
  const handleRegister = (e) => {
    e.preventDefault()
    registerReq(register, setAuthStatus, navigate)
  }

  useEffect( () => {
    setPwordCheck(passwordAuth(register.password, register.confirmPword))
  }, [register])

  return (
    <div className="login-register full-w flex-col align-items-center justify-content-center">
        <RegisterForm 
          handleRegisterChange={handleRegisterChange} 
          handleRegister={handleRegister} register={register} 
          pwordCheck={pwordCheck} authStatus={authStatus} 
        />
    </div>
  )
}

export default Register
