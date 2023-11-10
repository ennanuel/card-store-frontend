import { Link } from 'react-router-dom';
import image from '../../assets/card-images/Sample_User_Icon.png';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../../state/features/userSlice';

const Profile = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    function logOut() { dispatch(clearUser()) };

    return (
        <div className="profile relative">
            <img src={user.profilePic || image} alt="User Image" />
            <div className="profile_info full-border flex-col jc-center ai-center">
                <span className="uid">{user.username}</span>
                <span className="names flex-row full-w">
                    <div className="first">{user.names?.first}</div>
                    <div className="last">{user.names?.last}</div>
                </span>

                <Link to={`/user/${user.id}`}>View Profile</Link>
                <button onClick={logOut}>LOG OUT</button>
            </div>
        </div>
    )
};

export default Profile
