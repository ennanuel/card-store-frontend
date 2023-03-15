import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchCard } from "../assets/functions/card"
import '../styles/search/search.css'
import { FilterSearch, Loader, NoResult, SearchResult, Error } from "../components"
import { searchFilters } from "../assets/data"

const Search = ({ premium }) => {
  const { val } = useParams()
  const [cards, setCards] = useState({player: [], team: [], sport: []})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [empty, setEmpty] = useState(false)
  const [filter, setFilter] = useState('')

  const handleClick = (e) => {
    setFilter(e.target.value)
  }

  useEffect( () => {
    setLoading(true)
    searchCard(val, setCards, setLoading, setError, setEmpty)
  }, [val])

  return (
      <section className="search_page">
        <h1 className="full-border title">Search result for <span className="highlight">{val.replace('+', ' ')}</span></h1>
        <article className="search_results">
          <FilterSearch filter={filter} handleClick={handleClick} />
          {
            cards.player.length > 0 || cards.team.length > 0 || cards.sport.length > 0 ?
            searchFilters.map( (searchFilter, i) => (
              <SearchResult 
                premium={premium}
                cards={cards[searchFilter.name]} 
                error={error} 
                type={searchFilter.type} 
                filter={filter} 
                empty={empty} 
              />
            )) : 
            (
              loading ?
              <Loader text={`Searching for ${val.replace('+', ' ')}...`} /> :
              error ?
              <Error text="Something went wrong!" /> :
              <NoResult text="Nothing was found" />
            )
          }
        </article>
      </section>
  )
}

export default Search
