import { NoResult } from "../components"
import '../styles/search/search.css'

const Search = () => {
  return (
      <section className="search_page">
        <h1 className="full-border title">Search Result for - </h1>
        <article className="search_results">
          <NoResult text="Nothing was found" />
        </article>
      </section>
  )
}

export default Search
