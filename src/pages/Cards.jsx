import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { PageInfo, Filter, CardsList, Pagination } from '../components';
import { getTextDisplayType } from '../utils/site';
import { useGetCardsQuery } from '../state/api';
import '../styles/cards.scss';

const Cards = () => {
    const { fetchType, searchValue, page = 0 } = useParams();
    const { data = {}, isFetching, error } = useGetCardsQuery({ fetchType, searchValue, page, limit: 20 });
    const { totalPages = 0, cards = [] } = useMemo(() => data, [data]);
    const textDisplayType = useMemo(() => getTextDisplayType(fetchType), [fetchType]);
    
    return (
        <section className="cards_page">
            <PageInfo />
            <h2 className="title full-w full-border">Cards - {textDisplayType}</h2>
            <Filter />
            <CardsList loading={isFetching} error={error} cards={cards} />
            <Pagination totalPages={totalPages} to={`/cards/${fetchType}/${searchValue}`} />
        </section>
    )
}

export default Cards
