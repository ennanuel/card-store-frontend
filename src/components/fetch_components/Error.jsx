import icon from '../../assets/icons/broken_carrd.svg'

const Error = ({ text }) => {
  return (
    <div className="error full-w flex-col align-items-center justify-content-center">
      <img src={icon} alt="Error Image" className="error_img" />
      <p className="error_text">{ text }</p>
    </div>
  )
}

export default Error
