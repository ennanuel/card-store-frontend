import { useContext, useEffect, useState } from "react";
import { editUserInfo } from "../../utils/user";
import { useNavigate } from "react-router-dom";
import Loading from "../fetch_states/Loading";
import Error from "../fetch_states/Error";
import { UserContext } from "../../context/UserContext";

const EditUserInfo = () => {
    const { userDetails, loading: fetchLoading, error: fetchError } = useContext(UserContext);
    const [{ first, middle, last, username, email, phone, dob, bank, account_number }, setValues] = useState({});
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
            const editValues = { user_id: userDetails.id, first, middle, last, username, email, phone, dob, bank, account_number };
            await editUserInfo(editValues);
            navigate('/');
        } catch (error) {
            setError(true);
            setLoading(false);
            console.error(error);
        }
    };
    
    useEffect(() => {
        const { names = {}, ...otherValues } = userDetails;
        setValues({ ...otherValues, ...names });
    }, [userDetails]);

    if (loading || fetchLoading) return <Loading text="Loading..." />;
    if (error || fetchError) return <Error text="Something went wrong!" />;
    return (
        <form onSubmit={handleSubmit}>
            <div className="user_info flex-col">
                <h2 className="title full-border">Edit User Info</h2>
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
                <button type="submit" className="sell-btn action-btn relative">SAVE</button>
            </div>
        </form>
    )
}

export default EditUserInfo
