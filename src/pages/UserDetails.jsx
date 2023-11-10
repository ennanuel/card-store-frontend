import { UserInfo } from '../components';
import { UserProvider } from '../context/UserContext';
import '../styles/edituser.scss';

const UserDetails = () => {
  return (
    <UserProvider>
      <UserInfo />
    </UserProvider>
  )
}

export default UserDetails
