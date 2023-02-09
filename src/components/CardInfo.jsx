import image from '../assets/card-images/empty.jpg'
import '../styles/cardinfo/cardinfo.css'
import SellCard from './SellCard'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardInfo = () => {
  const [show, setShow] = useState(false)
  const [player, setPlayer] = useState()
  const [imgURL, setImgURL] = useState()
  const [playerPrice, setPrice] = useState()
  const { id } = useParams()

  useEffect( () => {
    fetch(`http://localhost:5000/api/player/find/${id}`)
      .then(res => res.text())
      .then(data => { 
        const result = JSON.parse(data)

        setPlayer(result)

        setImgURL('http://localhost:5000/images/' + result.image)

        setPrice((prev) => {
          const playerPrice = result.price
          const [num, decimal] = playerPrice.toString().split('.')

          let price = []
          let i = num.length

          while(i > 0) {
            price.unshift(num.substring(i - 3 > 0 ? i - 3: 0, i))
          i -= 3
          }

          return decimal ? price.join(',') + '.' + decimal : price.join(',')
        })
      })
    .catch(err => console.log('error', err))
  }, [id])

  return (
    <article className="card-info full-w full-border flex-row">
        <div className="player-image">
            <img src={imgURL || image} alt="Player Image" />
        </div>
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
          </tbody>
        </table>
        <div className="payment">
          <h3 className="price">$ { playerPrice }</h3>
          <button className="sell-btn action-btn relative" onClick={() => {setShow(true)}}>SELL</button>
        </div>
      </div>
      <SellCard show={show} setShow={setShow} />
    </article>
  )
}

export default CardInfo
