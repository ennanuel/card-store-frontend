import { Link } from 'react-router-dom'
import image from '../assets/card-images/91UKzod+lkL._AC_SL1500_.jpg'

const Card = () => {
  return (
    <div className="card flex-row align-items-center full-border">
      <div className="card-img">
        <Link to="/card">
          <img src={image} alt="card image" />
        </Link>
      </div>
      
      <div className="small-card-info">
        <h3 className="card-title link"><Link to="/card">2022 Absolute</Link></h3>
        <p className="card-desc">The 2022 Absolute football card set consists of 239 cards. There are 100 base veterans, 100 rookies and 39 rookie autograph jersey cards. Top rookies include Kenny Pickett, Breece Hall, Garrett Wilson, Chris Olave and more.</p>
        <h4 className="card-price"><span className='relative'>$</span>5350</h4>
      </div>
      
    </div>
  )
}

export default Card
