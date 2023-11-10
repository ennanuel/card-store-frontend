import { EditUserInfo } from '../components/forms';
import { UserProvider } from '../context/UserContext';
import '../styles/edituser.scss';

const EditUser = () => {
  return (
    <UserProvider>
      <EditUserInfo />
    </UserProvider>
  )
}

export default EditUser

