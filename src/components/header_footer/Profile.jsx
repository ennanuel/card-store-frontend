import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logUserOut } from '../../state/features/userSlice';
import { getProfilePic } from '../../utils/card';

const Profile = () => {
    const { username, profilePic } = useSelector(state => state.user);
    const image = useMemo(() => getProfilePic(profilePic), [profilePic]);
    const dispatch = useDispatch();
    function logOut() { dispatch(logUserOut()) };

    return (
        <div className="profile relative">
            <img src={image} alt="User Image" />
            <div className="profile_info absolute full-border flex-col jc-center ai-center">
                <span className="username">{username}</span>
                <Link to="/user/details" className="full-w profile-btn view-btn flex-row ai-center jc-center">View Profile</Link>
                <button onClick={logOut} className="profile-btn flex-row ai-center jc-center logout-btn full-w">Log Out</button>
            </div>
        </div>
    )
};

export default Profile
