const PageInfo = ({ page}) => {

  return (
    <div className="page-info full-w full-border flex-row align-items-center">
      <div className="page">{ page }</div>
      <div className="cards-sold">OVER 1,000 SOLD!</div>
    </div>
  )
}

export default PageInfo
