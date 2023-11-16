import { Link } from 'react-router-dom';
import { Loading } from '../fetch_states';
import logo from '../../assets/icons/site-logo.png';

const RegisterForm = ({ first, middle, last, email, phone, dob, address, bank, account_number, username, password, confirm_password, handleChange, handleSubmit, error, loading }) => {

  return (
    <form onSubmit={handleSubmit} className="register relative full-w">
      {
        loading &&
          <div className="form_loading absolute flex-row full-w full-h ai-center jc-center">
            <Loading text="Please wait..." />
          </div>
      }
      <div className="flex-row form-quest full-w">
        <img src={logo} className="logo" />
        <p className="form-text">
          <span>Already Registered?</span>
          <Link to="/login" className='form-link'> Login</Link>
        </p>
      </div>
      <h2 className="title full-border full-w">Sign Up</h2>
      <div className="inputs flex-col">
        <p id="error" className="bad full-w">{error.message}</p>
        <div className="names flex-row">
          <input type="text" className={`first ${error.field == 'first' && 'error-input'}`} placeholder="First Name" name="first" value={first} onChange={handleChange} />
          <input type="text" className={`middle ${error.field == 'middle' && 'error-input'}`} placeholder="Middle Name" name="middle" value={middle} onChange={handleChange} />
          <input type="text" className={`last ${error.field == 'last' && 'error-input'}`} placeholder="Last Name" name="last" value={last} onChange={handleChange} />
        </div>

        <div className="contact flex-row">
          <input type="email" className={`email ${error.field == 'email' && 'error-input'}`} name="email" id="email" placeholder="Email" value={email} onChange={handleChange} />
          <input type="tel" name="phone" id="phone" placeholder="Phone Number" value={phone} onChange={handleChange} />
        </div>

        <div className="bio relative flex-row ai-center">
          <label htmlFor="age">Date of Birth</label>
          <input type="date" className={`dob ${error.field == 'dob' && 'error-input'} full-w`} name="dob" id="dob" placeholder="Date of Birth" value={dob} onChange={handleChange} />
          <input type="text"name="address" id="address" placeholder="Address" value={address} onChange={handleChange} />
        </div>

        <div className="bank_info full-w flex-row">
          <input type="text" name="bank" id="bank" placeholder="Bank" value={bank} onChange={handleChange} />
          <input type="number" className={`account_number ${error.field == 'account_number' && 'error-input'}`} name="account_number" id="account_number" placeholder="Account Number" value={account_number} onChange={handleChange} />
        </div>
            
        <input type="text" className={`username ${error.field == 'username' && 'error-input'}`} name="username" id="username" placeholder="Username" value={username} onChange={handleChange} />
        <div className="passwords full-w flex-row">
          <div className="pword_input relative flex-row align-items-flexend">
            <input type='password' className={`password ${error.field == 'password' && 'error-input'}`} name="password" id="password" placeholder="Password" value={password} onChange={handleChange} />
          </div>
          <input type='password' className={`confirm_password ${error.field == 'confirm_password' && 'error-input'}`} name="confirm_password" id="cofirm_password" placeholder="Confirm Password" value={confirm_password} onChange={handleChange} />
        </div>
      </div>
      <button className="full-w">Register</button>
    </form>
  )
};

export default RegisterForm
