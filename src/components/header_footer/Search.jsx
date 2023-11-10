import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => setSearchInput(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchInput) return;
        navigate(`/search/${searchInput.replace(' ', '+')}`);
        setSearchInput('');
    }

    return (
        <form className="search-input full-border flex-row ai-center" onSubmit={handleSubmit}>
            <input className="full-w" type="text" id="search-card" placeholder="Search" onChange={handleChange} value={searchInput} />
            <button className="flex-row ai-center jc-center"><AiOutlineSearch /></button>
        </form>
    )
}

export default Search
