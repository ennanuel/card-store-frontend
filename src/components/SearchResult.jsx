import { useMemo } from 'react';
import CardsList from './CardsList';
import { NothingFound } from './fetch_states';
import { resolveCardImage } from '../utils/card';

const SearchResult = ({ filterType, filter, cards }) => {
    const showCards = useMemo(() => cards.length > 0 && (filter === filterType || !filter), [cards, filterType, filter]);
    const resolvedCards = useMemo(() => cards.map(resolveCardImage), [cards]);

    return (
        <div className="search_type">
            {
                showCards ?
                    <>
                        { !filter && <h3 className="dark_title">Result for Player {filterType}</h3> }
                        <div className={`search_result full-border ${filterType !== '' && 'give_margin'}`}>
                            <CardsList cards={resolvedCards} />
                        </div>
                    </> :
                    filter === filterType ? <NothingFound text="No results found." /> : null
            }
        </div>
    
    )
};

export default SearchResult
