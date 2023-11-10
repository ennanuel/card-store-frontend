import { useState } from 'react'
import { MdCancel } from 'react-icons/md'
import '../../styles/notification.scss'

const Notification = () => {
  const [show, setShow] = useState(true)
  return show ? (
    <section className="notification full-w">
      <h2>🎉🎉Congratulations on being one of our top 10 lucky customers on cardStore.🎉🎉</h2>
      <i className="icon absolute flex-row ai-center jc-center" onClick={() => { setShow(false) }}><MdCancel /></i>
    </section>
  ) : null
}

export default Notification
