import { useState, useEffect } from "react";
import { fetchTeams } from "../../assets/functions/card";

const TeamFilter = ({ navigate }) => {
  const [teams, setTeams] = useState([])

  const handleChange = (e) => {
      if(!e.target.value) return;
      
      const value = e.target.value

      navigate(`/cards/team/${value.replace(' ', '+')}`)
  }

  useEffect( () => {
      fetchTeams(setTeams)
  }, [])
  
  return (
      <article className="sport_filter flex-row align-items-center">
          <label htmlFor="select_team">Select team : </label>
          <select name="select_team" id="select_team" onChange={handleChange}>
              <option value=""> -- Team -- </option>
              { teams.map( (team, i) => <option key={i} value={team.name}>{team.name} ({team.sport})</option>) }
          </select>
      </article>
  )
}

export default TeamFilter
