import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components'
import { MdCancel } from "react-icons/md"
import { BsCheckCircleFill } from 'react-icons/bs'
import { BiShow, BiHide } from 'react-icons/bi'

const RegisterForm = ({ handleRegisterChange, handleRegister, pwordCheck, authStatus, loading }) => {
  const [showPword, setShowPword] = useState(false)
  const handleClick = () => {
    setShowPword(prev => !prev)
  }


  return (
    <form onSubmit={handleRegister} className="register relative full-w">
      {
        loading && 
        <div className="form_loading absolute flex-row full-w full-h align-items-center justify-content-center"><Loader text="Please wait..." /></div>
      }
          <div className="flex-row form-quest full-w align-items-center">
            <p className="form-text">Already Registered? <span className="form-link"><Link to="/login">Login</Link></span></p>
            <h1 className="logo">cardStore</h1>
          </div>
          <h2 className="title full-border full-w">Create Sign In</h2>
          <div className="inputs flex-col">
            <p id="error" className="bad full-w">
              {authStatus}
            </p>
            <div className="names flex-row">
              <input type="text" className="first_name" placeholder="First Name" name="first_name" onChange={handleRegisterChange} />
              <input type="text" className="middle_name" placeholder="Middle Name" name="middle_name" onChange={handleRegisterChange} />
              <input type="text" className="last_name" placeholder="Last Name" name="last_name"onChange={handleRegisterChange} />
            </div>

            <div className="contact flex-row">
              <input type="email" name="email" id="email" placeholder="Email" onChange={handleRegisterChange} />
              <input type="tel" name="phone" id="phone" placeholder="Phone Number" onChange={handleRegisterChange} />
            </div>

            <div className="bio relative flex-row align-items-center">
              <label htmlFor="age">Date of Birth</label>
              <input type="date" name="age" id="age" placeholder="Date of Birth" className="full-w" onChange={handleRegisterChange} />
              <input type="text" name="address" id="address" placeholder="Address" onChange={handleRegisterChange} />
            </div>

            <div className="bank_info full-w flex-row">
              <input type="text" name="bank" id="bank" placeholder="Bank" onChange={handleRegisterChange} />
              <input type="number" name="account_number" id="account_number" placeholder="Account Number" onChange={handleRegisterChange} />
            </div>
            
            <input type="text" name="username" id="username" placeholder="Username" onChange={handleRegisterChange} />
            <div className="passwords full-w flex-row">
              <div className="pword_input relative flex-row align-items-flexend">
                <input type={showPword ? 'text': 'password'} name="password" id="password" placeholder="Password" onChange={handleRegisterChange} />
                <button className="change_input_type absolute flex-row justify-content-center align-items-center" type="button" onClick={handleClick}>
                  {
                    showPword ?
                    <BiHide /> :
                    <BiShow />
                  }
                </button>
              </div>
              <input type={showPword ? 'text': 'password'} name="confirmPword" id="cofirmPword" placeholder="Confirm Password" onChange={handleRegisterChange} /> 
            </div>
             
            <p className="form-text">
              {
                pwordCheck && pwordCheck.split('\n').map(
                  (text, i) => (text === "All good") ?
                      <>
                        <span key={i} className="flex-row align-items-center good">
                          <i className="flex-row align-items-center justify-content-center"><BsCheckCircleFill /></i>{text}
                        </span><br key={text} />
                      </> :
                      <>
                        <span key={i} className="flex-row align-items-center bad">
                          <i className="flex-row align-items-center justify-content-center">{i !== pwordCheck.split('\n').length -1 && <MdCancel />}</i>{text}
                        </span><br key={text} />
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
