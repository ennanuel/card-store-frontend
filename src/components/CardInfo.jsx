import image from '../assets/card-images/empty.jpg'
import '../styles/cardinfo/cardinfo.css'
import SellCard from './SellCard'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPrice } from '../assets/functions/site'
import { fetchCard } from '../assets/functions/card'
import { Loader, Error } from '../components'

const CardInfo = () => {
  const [show, setShow] = useState(false)
  const [player, setPlayer] = useState()
  const [imgURL, setImgURL] = useState()
  const [playerPrice, setPrice] = useState()
  const [error, setError] = useState(false)
  const { id } = useParams()

  useEffect( () => {
    setPlayer(null)
    setImgURL(false)
    fetchCard(id, setPlayer, setImgURL, setPrice, getPrice, setError)
  }, [id])

  return (
    <article className="card-info full-w full-border flex-row">
        <div className="player-image">
            <img src={imgURL || image} alt="Player Image" />
        </div>
        {
          player ?
          <div className="player-info">
            <h3 className="player-name">{player?.names?.first} {player?.names?.middle} {player?.names?.last}</h3>
            <p className="player-card-desc">
                <span><b>Description:</b></span><br />
                { player?.desc }
            </p>
            <table className="additional-info">
              <tbody>
                <tr>
                    <td><b>Ranking:</b></td>
                    <td><span className="link"><Link to={`/cards/rating/${player?.rating}+100`}>{ player?.rating }</Link></span></td>
                </tr>
                <tr>
                    <td><b>Team:</b></td>
                    <td><span className="link"><Link to={`/cards/team/${player?.team}`}>{ player?.team }</Link></span></td>
                </tr>
                <tr>
                    <td><b>Sport:</b></td>
                    <td><span className="link"><Link to={`/cards/sport/${player?.sport}`}>{ player?.sport }</Link></span></td>
                </tr>
              </tbody>
            </table>
            <div className="payment">
              <h3 className="price">$ { playerPrice }</h3>
              <button className="sell-btn action-btn relative" onClick={() => {setShow(true)}}>SELL</button>
            </div>
          </div> :
          <>
          {
            error ?
            <Error text="Error fetching card details!" /> :
            <Loader text="Loading card..." />
          }
          </>
        }
      
      <SellCard show={show} setShow={setShow} />
    </article>
  )
}

export default CardInfo
