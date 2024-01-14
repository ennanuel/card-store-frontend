import { MdAdd, MdSearch } from "react-icons/md";

const Search = ({ handleSubmit, handleChange, search, optionText, searchValue, clearSearch }) => {
    return (
        <form onSubmit={handleSubmit} className="search-option full-w flex-row">
            <input className="full-border" type="text" value={searchValue} placeholder={`Search ${optionText}`} onChange={handleChange} />
            <button className="flex-row ai-center jc-center full-border">
                <MdSearch size={20} />
            </button>
            {
                search &&
                <button
                    onClick={clearSearch}
                    className="flex-row ai-center jc-center full-border clear-search">
                    <MdAdd size={20} />
                </button>
            }
        </form>
    )
};

export default Search
