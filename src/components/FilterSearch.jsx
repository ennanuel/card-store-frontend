import React from 'react'

const FilterSearch = ({filter, handleClick}) => {
  return (
    <>
    <div>
      <div className="filter_btns flex-row align-items-center justify-content-center">
        <button 
        className={`filter_btn sell-btn action-btn relative ${filter === '' && 'active-name-filter'}`} 
        value="" 
        onClick={handleClick}>
          All
        </button>
        <button 
        className={`filter_btn sell-btn action-btn relative ${filter === 'name' && 'active-name-filter'}`} 
        value="name" 
        onClick={handleClick}>
            Name
        </button>
        <button 
        className={`filter_btn sell-btn action-btn relative ${filter === 'sport' && 'active-name-filter'}`} 
        value="sport" 
        onClick={handleClick}>
            Sport
        </button>
        <button 
        className={`filter_btn sell-btn action-btn relative ${filter === 'team' && 'active-name-filter'}`} 
        value="team" 
        onClick={handleClick}>
        Team
        </button>
      </div>
    </div>
    <p className="search_filter_text">{filter ? `Showing results for ${filter}` : "Showing all results"}</p>
    </>
  )
}

export default FilterSearch
