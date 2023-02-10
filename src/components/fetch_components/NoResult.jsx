import icon from "../../assets/icons/empty_box.svg"

const NoResult = ({ text }) => {
  return (
    <div className="no_result full-w flex-col align-items-center justify-content-center">
      <img src={icon} alt="no result image" />
      <p>{text}</p>
    </div>
  )
}

export default NoResult
