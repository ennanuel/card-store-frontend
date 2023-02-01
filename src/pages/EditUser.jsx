import { useState } from 'react'
import { EditInfo, UserInfo } from '../components'
import '../styles/edituser/edituser.css'

const EditUser = ({user}) => {
  const [edit, setEdit] = useState(false)
  const handleClick = () => {
    setEdit(prev => !prev)
  }

  return (
    <div className="edit_user">
      {
        edit ?
        <EditInfo user={user} /> :
        <UserInfo user={user} />
      }
      <button className="sell-btn action-btn relative" onClick={handleClick}>EDIT INFO</button>
    </div>
  )
}

export default EditUser
