import { useState, useEffect } from 'react'
import { fetchSports } from '../../assets/functions/card'

const SportFilter = ({ val, navigate, location }) => {
    const [sports, setSports] = useState([])

    const handleChange = (e) => {
        navigate(`/cards/sport/${e.target.value}`)
    }

    useEffect( () => {
        fetchSports(setSports)
    }, [])
    
    return (
        <article className="sport_filter flex-row align-items-center">
            <label htmlFor="select_team">Showing <b className="highlight">{val ? val.replace('+', ' ') : 'All'}</b> Cards</label>
            <select name="select_team" id="select_team" value={val} onChange={handleChange}>
                <option value=""> All Sports </option>
                { sports.map( (sport, i) => <option key={i} value={sport}>{sport}</option>) }
            </select>
        </article>
    )
}

export default SportFilter
