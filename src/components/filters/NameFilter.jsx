import AlphabetList from '../AlphabetList'

const NameFilter = ({ location, op, navigate }) => {
  const handleClick = (e) => {
    const nav = location.pathname
    navigate(nav.replace(op, e.target.value))
  }

return (
  <>
    <AlphabetList />
    <div className="filter_btns flex-row align-items-center justify-content-center">
        <button 
        className={`filter_btn sell-btn action-btn relative ${op === 'first' && 'active-name-filter'}`} 
        value="first" 
        onClick={handleClick}>
            First Name
        </button>
        <button 
        className={`filter_btn sell-btn action-btn relative ${op === 'middle' && 'active-name-filter'}`} 
        value="middle" 
        onClick={handleClick}>
            Middle Name
        </button>
        <button 
        className={`filter_btn sell-btn action-btn relative ${op === 'last' && 'active-name-filter'}`} 
        value="last" 
        onClick={handleClick}>
            Last Name
        </button>
    </div>
  </>
)
}

export default NameFilter
