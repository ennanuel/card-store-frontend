import React from 'react';

const FILTER_TYPES = ['', 'name', 'sport', 'team'];

const FilterSearch = ({filter, handleClick}) => {
  return (
    <>
    <div>
        <div className="filter_btns flex-row ai-center jc-center">
          {
            FILTER_TYPES.map((filterType, i) => (
              <button 
              className={`filter_btn sell-btn action-btn relative ${filter === filterType && 'active-name-filter'}`} 
              value={filterType}
              onClick={handleClick}>
                {filterType || 'all'}
              </button>
            ))
          }
      </div>
    </div>
    <p className="search_filter_text">{filter ? `Showing results for ${filter}` : "Showing all results"}</p>
    </>
  )
}

export default FilterSearch
