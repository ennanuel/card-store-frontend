import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EditUserInfo } from '../components/forms';
import { useGetUserInfoQuery } from '../state/api';
import { editUserInfo } from "../utils/user";
import '../styles/user.scss';

const EditUser = () => {
  const { _id } = useSelector(state => state.user);
  const { data = {}, isFetching, fetchError } = useGetUserInfoQuery(_id);
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (!e.target) return;
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }))
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await editUserInfo(values, _id);
      navigate('/user/details');
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error(error);
    }
  };

  function retry() {
    setError(false);
  }
    
  useEffect(() => {
    const { names = {}, ...otherValues } = data;
    setValues({ ...otherValues, ...names });
  }, [data]);

  return (
    <section className="user">
      <EditUserInfo
        userDetails={values}
        loading={loading || isFetching}
        error={error || fetchError}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        retry={retry}
      />
    </section>
  )
}

export default EditUser

