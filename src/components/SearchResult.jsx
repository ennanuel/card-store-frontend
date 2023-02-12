import { CardsList, NoResult } from '../components'

const SearchResult = ({ type, filter, cards, error, empty }) => {
    const capText = type && type.substring(0, 1).toUpperCase()

    return (
        <div className="search_type">
            {
                cards?.length > 0 && (filter === type || filter === '') ?
                <>
                {filter === '' && <h3 className="dark_title">Result for Player {type.length > 1 ? capText + type.substring(1, ) : type}</h3>}
                <div className={`search_result full-border ${type !== '' && 'give_margin'}`}>
                    <CardsList cards={cards} error={error} empty={empty} />
                </div>
                </> : 
                ( 
                    filter === type ?
                    <NoResult text="No results found." /> :
                    null
                )
            }
        </div>
    
  )
}

export default SearchResult
