import React from 'react'

const UserInfo = ({user, handleClick}) => {
  return (
    <div className="user_info flex-col">
        <h2 className="title full-border">User Info</h2>
      <div className="names flex-row">
        <p className="profile_data relative full-border"><span className="profile_field absolute">first name</span>{user?.names.first_name}</p>
        <p className="profile_data relative full-border"><span className="profile_field absolute">middle name</span>{user?.names.middle_name}</p>
        <p className="profile_data relative full-border"><span className="profile_field absolute">last name</span>{user?.names.last_name}</p>
      </div>
        <p className="profile_data relative full-border"><span className="profile_field absolute">username</span>{user.username}</p>
        <p className="profile_data relative full-border"><span className="profile_field absolute">email</span>{user.email}</p>
        <p className="profile_data relative full-border"><span className="profile_field absolute">phone number</span>{user.phone}</p>
        <p className="profile_data relative full-border"><span className="profile_field absolute">date of birth</span>{user.dob}</p>
        <p className="profile_data relative full-border"><span className="profile_field absolute">bank</span>{user.bank}</p>
        <p className="profile_data relative full-border"><span className="profile_field absolute">account number</span>{user.account_number}</p>
        <button className="sell-btn action-btn relative" onClick={handleClick}>EDIT INFO</button>
    </div>
  )
}

export default UserInfo
