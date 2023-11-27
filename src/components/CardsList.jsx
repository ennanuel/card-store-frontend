import { useMemo } from 'react';
import Card from './Card';
import { Loading, Error, NothingFound } from './fetch_states';
import { resolveCardImage } from '../utils/card';

const CardsList = ({ cards, loading, error }) => {
  const cardsWithImages = useMemo(() => cards.map(resolveCardImage), [cards]);

  if (loading) return <Loading text="Loading cards..." />;
  if (error) return <Error text="Something went wrong!" />;
  if (cards.length <= 0) return <NothingFound text="No cards found." />;
  
  return (
    <ul className="cards">
      {
        cardsWithImages.map((card) => <li key={card._id}><Card {...card} /> </li>)
      }
    </ul>
  )
};

export default CardsList
