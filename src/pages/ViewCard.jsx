import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardsList, CardInfo, PageInfo } from '../components';
import { useGetRelatedCardsQuery } from '../state/api';

const ViewCard = () => {
    const { card_id } = useParams();
    const { data = [], isFetching, error } = useGetRelatedCardsQuery(card_id);
    
    return (
        <article className="view-card">
            <PageInfo />
            <CardInfo card_id={card_id} />
            <div className="related-cards">
                <h2 className="title full-border">Related Players</h2>
                <CardsList cards={data.slice(0, 6)} loading={isFetching} error={error} />
            </div>
        </article>
    )
}

export default ViewCard
