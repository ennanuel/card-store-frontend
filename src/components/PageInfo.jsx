import { useLocation } from 'react-router-dom'

const PageInfo = () => {
  const location = useLocation()
  const currentLocation = location.pathname.replace('/', ' | ');

  return (
    <div className="page-info full-w full-border flex-row align-items-center">
      <div className="page">Home{currentLocation}</div>
      <div className="cards-sold">OVER 1,000 SOLD!</div>
    </div>
  )
}

export default PageInfo
