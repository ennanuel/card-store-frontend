import { useState } from 'react'
import { MdCancel } from 'react-icons/md'
import '../styles/notification/notification.css'

const Notification = () => {
  const [show, setShow] = useState(true)
  return show ? (
    <section className="notification full-w">
      <h2>ALL Team Sets 50% Off Listed Price - Discount Shown in Cart.</h2>
      <i className="icon absolute flex-row align-items-center justify-content-center" onClick={() => { setShow(false) }}><MdCancel /></i>
    </section>
  ) : null
}

export default Notification
