import icon from "../../assets/icons/empty_box.svg"

const NothingFound = ({ text }) => {
  return (
    <div className="no_result full-w flex-col ai-center jc-center">
      <img src={icon} alt="no result image" />
      <p>{text}</p>
    </div>
  )
}

export default NothingFound
