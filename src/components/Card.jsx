import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { convertNumberToPriceFormat } from '../utils/site';

const Card = ({ _id, names = {}, desc, price, image }) => {
  const formattedPrice = useMemo(() => convertNumberToPriceFormat(price), []);

  return (
    <Link  to={`/card/${_id}/${names.first}+${names.last}`}className={`card relative flex-row ai-center full-border prem_card ${price > 40000 && 'premium_card'}`}>
      <div className="card-img">
        <img src={image} alt="card image" />
      </div>
      <div className="small-card-info">
        <h3 className="card-title link">
          {names.first} {names.middle || ''} {names.last || ''}
        </h3>
        <p className="card-desc"> 
          { desc.length > 200 ? desc?.substring(0, 200) : desc } {desc.length > 200 && <span className="truncate">...</span>} 
        </p>
        <h4 className="card-price">
          <span className='relative'>$</span>
          <span>{formattedPrice}</span>
        </h4>
      </div>
    </Link>
  )
}

export default Card
