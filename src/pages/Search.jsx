import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { FilterSearch, SearchResult } from "../components"
import { Loading, Error } from "../components/fetch_states";
import { SEARCH_FILTERS } from "../assets/data";
import { useGetSearchResultsQuery } from "../state/api";
import '../styles/search.scss';

const Search = () => {
  const { searchValue } = useParams();
  const searchWithoutPlusSign = useMemo(() => searchValue.replace('+', ' '), [searchValue]);
  const { data = { player: [], team: [], sport: [] }, isFetching, error } = useGetSearchResultsQuery(searchValue);
  const [filter, setFilter] = useState('');

  const handleClick = (e) => {
    setFilter(e.target.value);
  }

  return (
    <section className="search_page">
      <h1 className="full-border title">Search result for <span className="highlight">{searchWithoutPlusSign}</span></h1>
      <article className="search_results">
        <FilterSearch filter={filter} handleClick={handleClick} />
        {
          isFetching ?
            <Loading text={`Searching for ${searchWithoutPlusSign}...`} /> :
            error ?
              <Error text="Something went wrong!" /> :
              SEARCH_FILTERS.map(({ name, type }, i) => (
                <SearchResult
                  key={i}
                  cards={data[name]}
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
