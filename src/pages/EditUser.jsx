import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EditInfo, UserInfo } from '../components'
import '../styles/edituser/edituser.css'

const EditUser = ({user}) => {
  const [edit, setEdit] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    setEdit(true)
  }
  
  const handleSubmit = (e) => {
    e.preventDefalut();
    setEdit(false)
    navigate('/')
  }

  return (
    <div className="edit_user">
      {
        edit ?
        <EditInfo user={user} handleSubmit={handleSubmit} /> :
        <UserInfo user={user} handleClick={handleClick} />
      }
    </div>
  )
}

export default EditUser
