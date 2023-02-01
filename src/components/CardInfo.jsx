import image from '../assets/card-images/91UKzod+lkL._AC_SL1500_.jpg'
import { CiLocationOn } from 'react-icons/ci'
import '../styles/cardinfo/cardinfo.css'
import SellCard from './SellCard'
import { useState } from 'react'

const CardInfo = () => {
  const [show, setShow] = useState(false)


  return (
    <article className="card-info full-w full-border flex-row">
        <div className="player-image">
            <img src={image} alt="" />
        </div>
      <div className="player-info">
        <h3 className="player-name">Lionel Messi</h3>
        <p className="player-card-desc">
            <span><b>Description:</b></span><br />
            The 2022 Absolute football card set consists of 239 cards. There are 100 base veterans, 100 rookies and 39 rookie autograph jersey cards. Top rookies include Kenny Pickett, Breece Hall, Garrett Wilson, Chris Olave and more.
        </p>
        <table className="additional-info">
            <tr>
                <td><b>Ranking:</b></td>
                <td><span className="link">98.8</span></td>
            </tr>
            <tr>
                <td><b>Team:</b></td>
                <td><span className="link">Paris Saint German</span></td>
            </tr>
            <tr>
                <td><b>Sport:</b></td>
                <td><span className="link">Soccer/Football</span></td>
            </tr>
        </table><div className="payment">
        <h3 className="price">$ 5,350</h3>

        <button className="sell-btn action-btn relative" onClick={() => {setShow(true)}}>SELL</button>
      </div>
      </div>
      <SellCard show={show} setShow={setShow} />
    </article>
  )
}

export default CardInfo
