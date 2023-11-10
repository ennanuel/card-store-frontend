import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { PageInfo, Filter, CardsList } from '../components';
import { TEXT_DISPLAY_TYPES } from '../utils/site';
import { fetchCards } from '../utils/card';
import '../styles/cards.scss';

const Cards = () => {
    const { fetchType, searchValue } = useParams();
    const textDisplayType = useMemo(() => TEXT_DISPLAY_TYPES[fetchType] || TEXT_DISPLAY_TYPES['name'], [fetchType]);
    const [cardState, setCardState] = useState({ cards: [], error: false, loading: false });

    function start() { setCardState({ cards: [], error: false, loading: true }) };
    function handleFetch(res) { setCardState({ cards: res, error: false, loading: false }) };
    function handleError(error) {
        console.error(error);
        setCardState({ loading: false, error: true, cards: [] });
    }

    useEffect(() => {
        start();
        fetchCards({ fetchType, searchValue })
            .then(handleFetch)
            .catch(handleError);
    }, [fetchType, searchValue])
    
    return (
        <section className="cards_page">
            <PageInfo />
            <h2 className="title full-w full-border">Cards - {textDisplayType}</h2>
            <Filter />
            <CardsList { ...cardState } />
        </section>
    )
}

export default Cards
