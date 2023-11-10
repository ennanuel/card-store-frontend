const Loading = ({ text }) => {
  return (
    <div className="loader full-w flex-col ai-center jc-center">
      <div className="rotating_circle full-w" />
      <p className="loader_text">{text}</p>
    </div>
  )
}

export default Loading
