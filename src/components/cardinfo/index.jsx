import emptyImage from '../../assets/card-images/empty.jpg';
import { useMemo } from 'react'
import { LoadingCardDetails, Error } from '../fetch_states';
import { convertNumberToPriceFormat } from '../../utils/site'
import { resolveCardImage } from '../../utils/card'
import Details from './Details';
import AddToCart from './AddToCart';
import '../../styles/cardinfo.scss';
import { useGetCardQuery } from '../../state/api';

const CardInfo = ({ card_id }) => {
  const { data: card = {}, isFetching, error } = useGetCardQuery(card_id);
  const { names = {}, desc, rating, image = emptyImage, price, team, premium, quantity, sport, isInCart, outOfStock, isYours, } = useMemo(() => resolveCardImage(card), [card]);
  const convertedPrice = useMemo(() => convertNumberToPriceFormat(price), [price]);

  return (
    <article className="card-info full-w full-border flex-row">
      <div className="player-image">
        <img src={image} alt="Player Image" />
      </div>
      {
        error ?
          <Error text="Error fetching card details!" /> :
          isFetching ?
            <LoadingCardDetails /> :
            <div className="player-info flex-col">
              <Details
                {...(names)}
                desc={desc}
                rating={rating}
                team={team}
                sport={sport}
                premium={premium}
                quantity={quantity}
              
              />
              <AddToCart
                card_id={card_id}
                quantity={quantity}
                price={convertedPrice}
                isInCart={isInCart}
                outOfStock={outOfStock}
                isYours={isYours}
              />
            </div>
          
      }
    </article>
  )
};

export default CardInfo
