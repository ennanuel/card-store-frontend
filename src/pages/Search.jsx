import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { FilterSearch, SearchResult } from "../components"
import { Loading, Error } from "../components/fetch_states";
import { searchCard } from "../utils/card";
import { searchFilters } from "../assets/data";
import '../styles/search.scss';

const Search = () => {
  const { searchValue } = useParams();
  const searchWithoutPlusSign = useMemo(() => searchValue.replace('+', ' '), [searchValue]);
  const [cards, setCards] = useState({ player: [], team: [], sport: [] });
  const [{ loading, error }, setFetchState] = useState({ loading: false, error: false });
  const [filter, setFilter] = useState('');

  const handleClick = (e) => {
    setFilter(e.target.value)
  }
  function start() { setFetchState({ loading: true, error: false }) };
  function handleFetch(res) {
    setFetchState({ loading: false, error: false });
    setCards(res);
  }
  function handleError() { setFetchState({ loading: false, error: true }) };

  useEffect(() => {
    start();
    searchCard(searchValue)
      .then(handleFetch)
      .error(handleError);
  }, [searchValue])

  return (
    <section className="search_page">
      <h1 className="full-border title">Search result for <span className="highlight">{searchWithoutPlusSign}</span></h1>
      <article className="search_results">
        <FilterSearch filter={filter} handleClick={handleClick} />
        {
          loading ?
            <Loading text={`Searching for ${searchWithoutPlusSign}...`} /> :
            error ?
              <Error text="Something went wrong!" /> :
              searchFilters.map(({ name, type }, i) => (
                <SearchResult
                  cards={cards[name]}
                  filterType={type}
                  filter={filter}
                />
              ))
        }
      </article>
    </section>
  )
}

export default Search
