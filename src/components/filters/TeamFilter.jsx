import { useState, useEffect } from "react";
import { fetchTeams } from "../../assets/functions/card";

const TeamFilter = ({ navigate, val }) => {
  const [teams, setTeams] = useState([])

  const handleChange = (e) => {
      const value = e.target.value

      navigate(`/cards/team/${value.replace(' ', '+')}`)
  }

  useEffect( () => {
      fetchTeams(setTeams)
  }, [])
  
  return (
      <article className="sport_filter flex-row align-items-center">
          <label htmlFor="select_team">Showing cards of players in <b className="highlight">{val ? val.replace('+', ' ') : "All Teams"}</b></label>
          <select name="select_team" id="select_team" onChange={handleChange} value={val}>
              <option value=""> All Team </option>
              { teams.map( (team, i) => <option key={i} value={team.name}>{team.name} ({team.sport})</option>) }
          </select>
      </article>
  )
}

export default TeamFilter
