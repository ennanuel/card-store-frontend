import { useLocation } from 'react-router-dom'

const PageInfo = () => {
  const location = useLocation()
  const currLoc = location.pathname.split('/');
  const newLoc = currLoc
    .filter( elem => /^[a-z][a-z|\W]+[a-z]$/i.test(elem) )
    .map( elem => elem.includes('+') ? elem.replace('+', ' ') : elem )

  return (
    <div className="page-info full-w full-border flex-row align-items-center">
      <div className="page">Home | {newLoc.join(' | ')}</div>
      <div className="cards-sold">OVER 1,000 SOLD!</div>
    </div>
  )
}

export default PageInfo
