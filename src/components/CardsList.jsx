import Card from './Card';
import { Loading, Error, NothingFound } from './fetch_states';

const CardsList = ({ cards, loading, error }) => {
  return (
    <ul className={`${cards.length > 0 && 'cards'}`}>
      {
        cards.length > 0 ?
          cards.map((card, i) => <li key={i} ><Card {...card} /></li>) :
          error ?
            <Error text="Something went wrong!" /> :
            loading ?
              <Loading text="Loading cards..." /> :
              <NothingFound text="No cards found." />
      }
    </ul>
  )
};

export default CardsList
