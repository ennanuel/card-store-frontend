import { useState, useEffect } from 'react'
import { fetchSports } from '../../assets/functions/card'

const SportFilter = ({ op, navigate, location }) => {
    const [sports, setSports] = useState([])

    const handleChange = (e) => {
        if(!e.target.value) return;

        navigate(`/cards/sport/${e.target.value}`)
    }

    useEffect( () => {
        fetchSports(setSports)
    }, [])
    
    return (
        <article className="sport_filter flex-row align-items-center">
            <label htmlFor="select_team">Select sport : </label>
            <select name="select_team" id="select_team" onChange={handleChange}>
                <option value=""> -- Sport -- </option>
                { sports.map( (sport, i) => <option key={i} value={sport}>{sport}</option>) }
            </select>
        </article>
    )
}

export default SportFilter
