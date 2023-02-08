import { Link } from 'react-router-dom'

const Card = ({ card }) => {
  // const imgURL = new URL(`./assets/images/${content.image}`, import.meta.url).href
  const imgURL = 'http://localhost:5000/images/' + card.image

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
        <h4 className="card-price"><span className='relative'>$</span> { card.price } </h4>
      </div>
      
    </div>
  )
}

export default Card
