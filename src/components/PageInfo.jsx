import { useParams } from "react-router-dom"

const PageInfo = ({ page }) => {
  const {op, ...otherParams} = useParams()

  return (
    <div className="page-info full-w full-border flex-row align-items-center">
      <div className="page">{ page && page.replace(` | ${op}`, '') }</div>
      <div className="cards-sold">OVER 1,000 SOLD!</div>
    </div>
  )
}

export default PageInfo
