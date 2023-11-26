import { useMemo } from "react";
import { Link } from "react-router-dom";
import Loading from "../fetch_states/Loading";
import Error from "../fetch_states/Error";
import { HiCamera, HiXMark } from "react-icons/hi2";
import { MdCheck } from "react-icons/md";

const EditUserInfo = ({ userDetails = {}, imageSrc, loading, error, handleChange, handleFileChange, handleSubmit, retry }) => {
    const { first, middle, last, username, email, phone, dob, bank, account_number } = useMemo(() => userDetails, [userDetails]);

    if (loading) return <Loading text="Please wait..." />;
    if (error) return (
        <div className="flex-col jc-center">
            <Error text="Something went wrong!" />
            <button className="retry-btn" onClick={retry}>Retry</button>
        </div>
    );

    return (
        <form onSubmit={handleSubmit}>
            <div className="user_info edit flex-col">
                <h2 className="title full-border">Edit User Info</h2>
                
                <label htmlFor="profile_pic" className="image full-w flex-row">
                    <img src={imageSrc} className="full-w" alt="" />
                    <input onChange={handleFileChange} type="file" accept="image/jpg, image/png, image/jpeg" id="profile_pic" name="profilePic" />
                    <span className="flex-row ai-center jc-center">
                        <HiCamera />
                    </span>
                </label>
                <div className="names flex-row">
                    <div className="profile_data relative full-border">
                        <label className="profile_field absolute">first name</label>
                        <input type="text" name="first" value={first} onChange={handleChange} />
                    </div>

                    <div className="profile_data relative full-border">
                        <label className="profile_field absolute">middle name</label>
                        <input type="text" name="middle" value={middle} onChange={handleChange} />
                    </div>

                    <div className="profile_data relative full-border">
                        <label className="profile_field absolute">last name</label>
                        <input type="text" name="last" value={last} onChange={handleChange} />
                    </div>
                </div>

                <div className="profile_data relative full-border">
                    <label className="profile_field absolute">username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} />
                </div>
                <div className="profile_data relative full-border">
                    <label className="profile_field absolute">email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </div>

                <div className="profile_data relative full-border">
                    <label className="profile_field absolute">phone number</label>
                    <input type="tel" name="phone" value={phone} onChange={handleChange} />
                </div>

                <div className="profile_data relative full-border">
                    <label className="profile_field absolute">date of birth</label>
                    <input type="date" name="dob" value={dob} onChange={handleChange} />
                </div>

                <div className="profile_data relative full-border">
                    <label className="profile_field absolute">bank</label>
                    <input type="text" name="bank" value={bank} onChange={handleChange} />
                </div>
                <div className="profile_data relative full-border">
                    <label className="profile_field absolute">account number</label>
                    <input type="number" name="account_number" value={account_number} onChange={handleChange} />
                </div>
            </div>
            <div className="action-btns flex-row ai-center">
                <Link to="/user/details" className="sell-btn action-btn remove-btn relative">
                    <HiXMark size={20} />
                    <span>Cancel</span>
                </Link>
                <button type="submit" className="sell-btn action-btn relative">
                    <MdCheck size={20} />
                    <span>Save</span>
                </button>
            </div>
        </form>
    )
}

export default EditUserInfo
