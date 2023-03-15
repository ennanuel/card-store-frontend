import { Card, Error, Loader, NoResult } from '../components'

const CardsList = ({cards, premium, error, empty}) => {
  return (
    <ul className={`${cards.length > 0 && 'cards'}`}>
        {
            cards.length > 0 ?
            cards.map((card, i) => <li key={i} ><Card premium={premium} card={card} /></li>) : 
            <>
            {
                error ?
                <Error text="Something went wrong!" /> :
                ( empty ?
                  <NoResult text="No such cards." /> :
                  <Loader text="Loading cards..." />
                )
            } 
            </>
        }
    </ul>
  )
}

export default CardsList
