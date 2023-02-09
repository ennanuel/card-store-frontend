import { Link } from 'react-router-dom'

const Card = ({ card }) => {
  const imgURL = 'http://localhost:5000/images/' + card.image
  const [num, decimal] = card.price.toString().split('.')

  let price = []
  let i = num.length

  while(i > 0) {
    price.unshift(num.substring(i - 3 > 0 ? i - 3: 0, i))
    i -= 3
  }

  return (
    <div className="card flex-row align-items-center full-border">
      <div className="card-img">
        <Link to={`/card/${card._id}/${card.names?.first}+${card.names?.last}`}>
          <img src={imgURL} alt="card image" />
        </Link>
      </div>
      
      <div className="small-card-info">
        <h3 className="card-title link"><Link to={`/card/${card._id}/${card.names?.first}+${card.names?.last}`}>{card.names?.first} {card.names?.middle || ''} {card.names?.last || ''}</Link></h3>
        <p className="card-desc"> { card.desc } </p>
        <h4 className="card-price"><span className='relative'>$</span> { decimal ? price.join(',') + '.' + decimal : price.join(',') } </h4>
      </div>
      
    </div>
  )
}

export default Card
