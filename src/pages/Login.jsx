import { useContext, useState } from "react"
import { LoginForm } from "../components/forms"
import { login } from "../utils/login"
import { useDispatch } from "react-redux";
import { authenticateUser } from "../state/features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [loginValues, setLoginValues] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setLoading(true);
      await login(loginValues);
      dispatch(authenticateUser());
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    if (!e.target) return;
    const { name, value } = e.target;
    setLoginValues(prev => ({ ...prev, [name]: value }));
    setError('');
  }

  return (
    <div className="login-register relative full-w flex-col ai-center jc-center">
      <LoginForm
        {...loginValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setError={error}
        error={error}
        loading={loading}
      />
    </div>
  )
};

export default Login
