import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardsList, CardInfo, PageInfo } from '../components';
import { fetchRelatedCards } from '../utils/card';

const ViewCard = () => {
    const { card_id } = useParams();
    const [relatedCards, setRelatedCards] = useState([]);
    const [{ loading, error }, setFetchState] = useState({ loading: false, error: false });

    function start() { setFetchState({ loading: true, error: false }) };
    function handleFetch(res) { 
        setRelatedCards(res);
        setFetchState({ error: false, loading: false });
    };
    function handleError(error) {
        console.error(error);
        setFetchState({ error: true, loading: false });
    }
    
    useEffect(() => {
        start();
        fetchRelatedCards(card_id)
            .then(handleFetch)
            .catch(handleError);
    }, [card_id])
    
    return (
        <article className="view-card">
            <PageInfo />
            <CardInfo card_id={card_id} />
            <div className="related-cards">
                <h2 className="title full-border">Related Players</h2>
                <CardsList cards={relatedCards.slice(0, 6)} loading={loading} error={error} />
            </div>
        </article>
    )
}

export default ViewCard
