import { useSelector, useDispatch } from 'react-redux';
import { MdCancel } from 'react-icons/md';
import { clearNotification } from '../../state/features/userSlice';
import '../../styles/notification.scss';

const Notification = () => {
  const { notification } = useSelector(state => state.user);
  const dispatch = useDispatch();

  if (!notification) return;

  return (
    <section className="notification full-w">
      <h2>{notification}</h2>
      <button
        className="icon absolute flex-row ai-center jc-center"
        onClick={() => dispatch(clearNotification())}
      >
        <MdCancel />
      </button>
    </section>
  )
}

export default Notification
