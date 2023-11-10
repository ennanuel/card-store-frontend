import { useState, useEffect, useMemo } from "react";
import { fetchTeams } from "../../utils/card";
import { useNavigate } from "react-router-dom";

const TeamFilter = ({ searchValue = 'All Teams' }) => {
    const navigate = useNavigate();
    const [teams, setTeams] = useState([]);
    const teamName = useMemo(() => searchValue.replace('+', ' '), [searchValue])
    const navigateToTeam = (e) => {
        const teamName = e.target.value;
        navigate(`/cards/team/${teamName.replace(' ', '+')}`);
    }

    useEffect( () => {
        fetchTeams()
            .then(res => setTeams(res))
            .catch(error => console.error(error));
    }, [])
    
    return (
        <article className="sport_filter flex-row ai-center">
            <label htmlFor="select_team">
                <span>Showing cards of players in </span>
                <b className="highlight">{teamName}</b>
            </label>
            <select name="select_team" id="select_team" onChange={navigateToTeam}>
                <option value="all"> All Team </option>
                { teams.map( (team, i) => <option key={i} value={team.name}>{team.name} ({team.sport})</option>) }
            </select>
        </article>
    )
}

export default TeamFilter
