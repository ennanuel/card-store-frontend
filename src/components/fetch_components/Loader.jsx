const Loader = ({ text }) => {
  return (
    <div className="loader full-w flex-col align-items-center justify-content-center">
      <div className="rotating_circle full-w" />
      <p className="loader_text">{text}</p>
    </div>
  )
}

export default Loader
