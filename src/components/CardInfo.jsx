import image from '../assets/card-images/empty.jpg'
import '../styles/cardinfo/cardinfo.css'
import SellCard from './SellCard'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HiCheckBadge } from 'react-icons/hi2'
import { getPrice } from '../assets/functions/site'
import { fetchCard } from '../assets/functions/card'
import { Error } from '../components'

const CardInfo = ({ premium, isPending, setIsPending }) => {
  const [show, setShow] = useState(false)
  const [player, setPlayer] = useState()
  const [imgURL, setImgURL] = useState()
  const [playerPrice, setPrice] = useState()
  const [error, setError] = useState(false)
  const { id } = useParams()

  useEffect( () => {
    fetchCard(id, premium, setPlayer, setImgURL, setPrice, getPrice, setError)
  }, [id])

  return (
    <article className="card-info full-w full-border flex-row">
        <div className="player-image">
            <img src={imgURL || image} alt="Player Image" />
        </div>
        {
          !error ?
          <div className="player-info">
            <h3 className="player-name flex-row align-items-center">
              {
                player?.names ?
                <>{player?.names?.first} {player?.names?.middle} {player?.names?.last}</>
                :
                <span className="loading_names"></span>
              }
              {
                ((player?.price > 15000 && !premium) || (player?.premPrice > 50000 && premium)) &&
                <div className={`premium_box flex-row align-items-center ${premium && 'premium_text'}`}>
                  <span className="prem_icon flex-row justify-content-center align-items-center"><HiCheckBadge /></span> <span>PREMIUM CARD</span>
                </div>
              }
            </h3>
            <p className="player-card-desc">
                <span><b>Description:</b></span><br />
                { 
                  player?.desc ?
                  <>{player?.desc}</> :
                  <span className="loading_desc"></span>
                }
            </p>
            <table className="additional-info">
              <tbody>
                <tr>
                    <td><b>Ranking:</b></td>
                    <td><span className="link">
                      {
                        player?.rating ?
                        <Link to={`/cards/rating/${player?.rating}+100`}>{ player?.rating }</Link> :
                        <span className="loading_info"></span>
                      }                
                    </span></td>
                </tr>
                <tr>
                    <td><b>Team:</b></td>
                    <td><span className="link">
                      {
                        player?.team ?
                        <Link to={`/cards/team/${player?.team}`}>{ player?.team }</Link> :
                        <span className="loading_info"></span>
                      }
                    </span></td>
                </tr>
                <tr>
                    <td><b>Sport:</b></td>
                    <td><span className="link">
                      {
                        player?.sport ?
                        <Link to={`/cards/sport/${player?.sport}`}>{ player?.sport }</Link> :
                        <span className="loading_info"></span>
                      }
                    </span></td>
                </tr>
              </tbody>
            </table>
            <div className="payment">
              <h3 className="price">
                {
                  playerPrice ?
                  `$ ${playerPrice}` :
                  <span className="price_loading"></span>
                }
              </h3>
              <button className="sell-btn action-btn relative" onClick={() => {setShow(true)}}>{isPending ? "PENDING SALE" : "SELL"}</button>
            </div>
          </div> :
          <Error text="Error fetching card details!" />
        }
      
      <SellCard setIsPending={setIsPending} isPending={isPending} show={show} setShow={setShow} />
    </article>
  )
}

export default CardInfo
