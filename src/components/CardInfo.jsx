import image from '../assets/card-images/empty.jpg'
import { CiLocationOn } from 'react-icons/ci'
import '../styles/cardinfo/cardinfo.css'
import SellCard from './SellCard'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardInfo = () => {
  const [show, setShow] = useState(false)
  const [player, setPlayer] = useState()
  const { id } = useParams()

  useEffect( () => {
    fetch(`http://localhost:5000/api/player/find/${id}`)
      .then(response => response.text())
      .then(result => { setPlayer(JSON.parse(result))})
      .catch(error => console.log('error', error));
  }, [id])

  return (
    <article className="card-info full-w full-border flex-row">
        <div className="player-image">
            <img src={player?.image || image} alt="" />
        </div>
      <div className="player-info">
        <h3 className="player-name">{player?.names?.first} {player?.names?.middle} {player?.names?.last}</h3>
        <p className="player-card-desc">
            <span><b>Description:</b></span><br />
            { player?.desc }
        </p>
        <table className="additional-info">
            <tr>
                <td><b>Ranking:</b></td>
                <td><span className="link">{ player?.rating }</span></td>
            </tr>
            <tr>
                <td><b>Team:</b></td>
                <td><span className="link">{ player?.team }</span></td>
            </tr>
            <tr>
                <td><b>Sport:</b></td>
                <td><span className="link">{ player?.sport }</span></td>
            </tr>
        </table><div className="payment">
        <h3 className="price">$ { player?.price }</h3>

        <button className="sell-btn action-btn relative" onClick={() => {setShow(true)}}>SELL</button>
      </div>
      </div>
      <SellCard show={show} setShow={setShow} />
    </article>
  )
}

export default CardInfo
