import { useNavigate, useSearchParams } from 'react-router-dom'
import AlphabetList from '../AlphabetList'

const BUTTONS = ['first', 'middle', 'last'];

const NameFilter = ({ url, searchValue, fetchType }) => {
  const navigate = useNavigate();

  const navigateToName = (e) => {
    const modifiedURL = url.replace(fetchType, e.target.value);
    navigate(`${modifiedURL}`);
  }

  return (
    <>
      <AlphabetList alphabet={searchValue} />
      <div className="filter_btns flex-row ai-center jc-center">
        {
          BUTTONS.map((value, i) => (
            <button
              key={i}
              className={`filter_btn sell-btn action-btn relative ${fetchType === value && 'active-name-filter'}`}
              value={value}
              onClick={navigateToName}>
              {`${value} Name`}
            </button>
          ))
        }
      </div>
    </>
  )
};

export default NameFilter
