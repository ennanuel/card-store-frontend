import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdCancel } from "react-icons/md"
import { BsCheckCircleFill } from 'react-icons/bs'

const RegisterForm = ({ register, handleRegisterChange, handleRegister, pwordCheck, authStatus }) => {
  const [showPword, setShowPword] = useState(false)
  const handleClick = () => {
    setShowPword(prev => !prev)
  }


  return (
    <form onSubmit={handleRegister} className="register full-w">
          <p className="flex-row form-quest full-w align-items-center">
            <p className="form-text">Already Registered? <span className="form-link"><Link to="/login">Login</Link></span></p>
            <h1 className="logo">cardStore</h1>
          </p>
          <h2 className="title full-border full-w">Create Sign In</h2>
          <div className="inputs flex-col">
            <p id="error" className="bad full-w">
              {authStatus}
            </p>
            <div className="names flex-row">
              <input type="text" className="first_name" placeholder="First Name" name="first_name" value={register.names.first_name} />
              <input type="text" className="middle_name" placeholder="Middle Name" name="middle_name" value={register.names.middle_name} />
              <input type="text" className="last_name" placeholder="Last Name" name="last_name" value={register.names.last_name} />
            </div>

            <div className="contact flex-row">
              <input type="email" name="email" id="email" placeholder="Email" value={register.email} onChange={handleRegisterChange} />
              <input type="tel" name="phone" id="phone" placeholder="Phone Number" value={register.phone} onChange={handleRegisterChange} />
            </div>

            <div className="bio relative flex-row align-items-center">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" name="dob" id="dob" placeholder="Date of Birth" className="full-w" value={register.age} onChange={handleRegisterChange} />
              <input type="text" name="address" id="address" placeholder="Address" value={register.address} onChange={handleRegisterChange} />
            </div>

            <div className="bank_info full-w flex-row">
              <input type="text" name="bank" id="bank" placeholder="Bank" value={register.bank} onChange={handleRegisterChange} />
              <input type="number" name="account_number" id="account_number" placeholder="Account Number" value={register.account_number} onChange={handleRegisterChange} />
            </div>
            
            <input type="text" name="username" id="username" placeholder="Username" value={register.username} onChange={handleRegisterChange} />
            <div className="passwords full-w flex-row">
              <input type={showPword ? 'text': 'password'} name="password" id="password" placeholder="Password" value={register.password} onChange={handleRegisterChange} />
              <input type={showPword ? 'text': 'password'} name="confirmPword" id="cofirmPword" placeholder="Confirm Password" value={register.confirmPword} onChange={handleRegisterChange} /> 
              <button type="button" onClick={handleClick}>Show Password</button>
            </div>
             
            <p className="form-text">
              {
                pwordCheck && pwordCheck.split('\n').map(
                  (text, i) => (text === "All good") ?
                      <>
                        <span key={i} className="flex-row align-items-center good"><i className="flex-row align-items-center justify-content-center"><BsCheckCircleFill /></i>{text}</span><br key={i} />
                      </> :
                      <>
                        <span key={i} className="flex-row align-items-center bad"><i className="flex-row align-items-center justify-content-center">
                          <MdCancel /></i>{text}
                        </span><br key={i} />
                      </>
                )
              }
            </p>
          </div>
          <button className="full-w">Register</button>
        </form>
  )
}

export default RegisterForm
