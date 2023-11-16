import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';
import { Loading, Error } from '../components/fetch_states';
import { useGetUserInfoQuery } from '../state/api';
import { useSelector, useDispatch } from 'react-redux';
import { logUserOut } from '../state/features/userSlice';
import { convertToDateFormat } from '../utils/site';

const UserInfo = () => {
  const { _id } = useSelector(state => state.user);
  const { data = {}, isFetching, error } = useGetUserInfoQuery(_id);
  const { names, username, email, phone, dob, bank, account_number } = useMemo(() => data, [data]);
  const dateOfBirth = useMemo(() => convertToDateFormat(dob, true), [dob])
  const dispatch = useDispatch();
  
  function logout() {
    dispatch(logUserOut());
  }

  if (isFetching) return <Loading text="Fetching your details..." />;
  if (error) return <Error text="Could not fetch details!" />;

  return (
    <section className="user">
      <div className="user_info flex-col">
        <h2 className="title full-border">User Details</h2>
        <Link to="/user/edit" className="sell-btn action-btn relative">Edit Details</Link>
        <div className="names flex-row">
          <p className="profile_data relative full-border">
            <span className="profile_field absolute">first name</span>
            <span>{names?.first}</span>
          </p>
          <p className="profile_data relative full-border">
            <span className="profile_field absolute">middle name</span>
            <span>{names?.middle}</span>
          </p>
          <p className="profile_data relative full-border">
            <span className="profile_field absolute">last name</span>
            <span>{names?.last}</span>
          </p>
        </div>
        <p className="profile_data relative full-border">
          <span className="profile_field absolute">username</span>
          <span>{username}</span>
        </p>
        <p className="profile_data relative full-border">
          <span className="profile_field absolute">email</span>
          <span>{email}</span>
        </p>
        <p className="profile_data relative full-border">
          <span className="profile_field absolute">phone number</span>
          <span>{phone}</span>
        </p>
        <p className="profile_data relative full-border">
          <span className="profile_field absolute">date of birth</span>
          <span>{dateOfBirth}</span>
        </p>
        <p className="profile_data relative full-border">
          <span className="profile_field absolute">bank</span>
          <span>{bank}</span>
        </p>
        <p className="profile_data relative full-border">
          <span className="profile_field absolute">account number</span>
          <span>{account_number}</span>
        </p>
      </div>
      <div className="action-btns">
        <button onClick={logout} className="sell-btn action-btn remove-btn relative">Log Out</button>
      </div>
    </section>
  )
};

export default UserInfo
