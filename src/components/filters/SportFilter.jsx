import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSports } from '../../utils/card';

const SportFilter = ({ searchValue = 'All' }) => {
    const [sports, setSports] = useState([]);
    const sportName = useMemo(() => searchValue.replace('+', ' '), [searchValue])
    const navigate = useNavigate();

    const navigateToSport = (e) => {
        const sportName = e.target.value;
        navigate(`/cards/sport/${sportName.replace(' ', '+')}`);
    }

    useEffect( () => {
        fetchSports()
            .then(res => setSports(res))
            .catch(error => console.error(error));
    }, [])
    
    return (
        <article className="sport_filter flex-row ai-center">
            <label htmlFor="select_team">Showing <b className="highlight">{sportName}</b> Cards</label>
            <select name="select_team" className="full-w" id="select_team" onChange={navigateToSport}>
                <option value="all"> All Sports </option>
                { sports.map( ({ name }, i) => <option key={i} value={name}>{name}</option>) }
            </select>
        </article>
    )
}

export default SportFilter
