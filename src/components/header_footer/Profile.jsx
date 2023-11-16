import { Link } from 'react-router-dom';
import image from '../../assets/card-images/Sample_User_Icon.png';
import { useSelector, useDispatch } from 'react-redux';
import { logUserOut } from '../../state/features/userSlice';

const Profile = () => {
    const { username, profilePic = image } = useSelector(state => state.user);
    const dispatch = useDispatch();
    function logOut() { dispatch(logUserOut()) };

    return (
        <div className="profile relative">
            <img src={profilePic} alt="User Image" />
            <div className="profile_info absolute full-border flex-col jc-center ai-center">
                <span className="username">{username}</span>
                <Link to="/user/details" className="full-w profile-btn view-btn flex-row ai-center jc-center">View Profile</Link>
                <button onClick={logOut} className="profile-btn flex-row ai-center jc-center logout-btn full-w">Log Out</button>
            </div>
        </div>
    )
};

export default Profile
