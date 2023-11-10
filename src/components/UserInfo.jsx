import React, { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Loading, Error } from './fetch_states';

const UserInfo = () => {
  const { userDetails, loading, error } = useContext(UserContext);
  const { names, username, email, phone, dob, bank, account_number } = useMemo(() => userDetails, [userDetails]);

  if (loading) return <Loading text="Fetching your details..." />;
  if(error) return <Error text="Could not fetch data!" />
  return (
    <div className="user_info flex-col">
      <h2 className="title full-border">User Info</h2>
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
        <span>{dob}</span>
      </p>
      <p className="profile_data relative full-border">
        <span className="profile_field absolute">bank</span>
        <span>{bank}</span>
      </p>
      <p className="profile_data relative full-border">
        <span className="profile_field absolute">account number</span>
        <span>{account_number}</span>
      </p>
      <Link to={`/edit_user/${user._id}`} className="sell-btn action-btn relative">EDIT INFO</Link>
    </div>
  )
}

export default UserInfo
