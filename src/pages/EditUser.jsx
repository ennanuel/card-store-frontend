import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EditUserInfo } from '../components/forms';
import { authenticateUser } from '../state/features/userSlice';
import { useGetUserInfoQuery } from '../state/api';
import { editUserInfo } from "../utils/user";
import { getImageSrc } from '../utils';
import image from "../assets/card-images/empty.jpg";
import '../styles/user.scss';

const EditUser = () => {
  const { _id } = useSelector(state => state.user);
  const { data = {}, isFetching, fetchError } = useGetUserInfoQuery(_id);
  const [values, setValues] = useState({ first: '', middle: '', last: '', username: '', email: '', phone: '', dob: '', bank: '', account_number: '', profilePic: undefined });
  const [imageSrc, setImageSrc] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (!e.target) return;
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }))
  };

  const handleFileChange = async (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const imgSrc = await getImageSrc(file);
    setImageSrc(imgSrc);
    setValues(prev => ({ ...prev, profilePic: file }));
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await editUserInfo(values, _id);
      dispatch(authenticateUser());
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
    const { names = {}, dob = '', profilePic, ...otherValues } = data;
    const dobWithoutTimeZone = dob?.replace(/T\d+:\d+:\d+.\d+Z/i, '');
    setImageSrc(profilePic || image);
    setValues({ ...otherValues, dob: dobWithoutTimeZone, ...names });
  }, [data]);

  return (
    <section className="user">
      <EditUserInfo
        userDetails={values}
        imageSrc={imageSrc}
        loading={loading || isFetching}
        error={error || fetchError}
        handleFileChange={handleFileChange}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        retry={retry}
      />
    </section>
  )
}

export default EditUser

