const EditInfo = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div className="user_info flex-col">
        <h2 className="title full-border">Edit User Info</h2>
        <div className="names flex-row">
            <div className="profile_data relative full-border">
                <label className="profile_field absolute">first name</label>
                <input type="text" name="first_name" />
            </div>

            <div className="profile_data relative full-border">
                <label className="profile_field absolute">middle name</label>
                <input type="text" name="middle_name" />
            </div>

            <div className="profile_data relative full-border">
                <label className="profile_field absolute">last name</label>
                <input type="text" name="last_name" />
            </div>
        </div>

            <div className="profile_data relative full-border">
                <label className="profile_field absolute">username</label>
                <input type="text" name="username" />
            </div>
            <div className="profile_data relative full-border">
                <label className="profile_field absolute">email</label>
                <input type="email" name="email" />
            </div>

            <div className="profile_data relative full-border">
                <label className="profile_field absolute">phone number</label>
                <input type="tel" name="phone" />
            </div>

            <div className="profile_data relative full-border">
                <label className="profile_field absolute">date of birth</label>
                <input type="date" name="dob" />
            </div>

            <div className="profile_data relative full-border">
                <label className="profile_field absolute">bank</label>
                <input type="text" name="bank" />
            </div>
            <div className="profile_data relative full-border">
                <label className="profile_field absolute">account number</label>
                <input type="number" name="account_number" />
            </div>
            <button className="sell-btn action-btn relative">SAVE</button>
        </div>
    </form>
  )
}

export default EditInfo
