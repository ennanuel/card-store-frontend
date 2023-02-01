import { Link } from 'react-router-dom'
import image from '../assets/card-images/91UKzod+lkL._AC_SL1500_.jpg'

const Profile = ({user, setUser}) => {
    console.log(typeof(user))
    const logOut = () => {
        setUser(null);
        localStorage.clear();
    }

    return (
        <div className="profile relative">
        <Link to="/user"><img src={image} alt="" /></Link>
        <div className="profile_info full-border flex-col justify-content-center align-items-center">
            <span className="uid">{user.username}</span>
            <span className="names flex-row full-w">
                <div className="first">{user.names.first}</div>
                <div className="last">{user.names.last}</div>
            </span>

            <Link to="/user">View Profile</Link>
            <button onClick={logOut}>LOG OUT</button>
        </div>
        </div>
    )
}

export default Profile
