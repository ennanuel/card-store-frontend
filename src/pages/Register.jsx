import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../components/forms';
import { register } from '../utils/register';
import '../styles/login.scss';

const Register = () => {
  const [registerValues, setRegisterValues] = useState({first: '', middle: '', last: '', email: '', phone: '', dob: '', address: '', bank: '', account_number: '', username: '', password: '', confirm_password: ''});
  const [error, setError] = useState({ field: '', message: '' });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (!e.target) return;
    const { name, value } = e.target;
    setRegisterValues(prev => ({ ...prev, [name]: value }));
    setError({ field: '', message: '' });
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { status, ...error } = await register(registerValues);
      if (status !== 200) return setError(error);
      navigate('/login');
    } catch (error) {
      setError({ message: 'Something went wrong' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-register full-w flex-col ai-center jc-center">
      <RegisterForm 
        {...registerValues}
        handleChange={handleChange} 
        handleSubmit={handleRegister}
        error={error} 
        loading={loading}
       />
    </div>
  )
}

export default Register
