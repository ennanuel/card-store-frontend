import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RatingFilter = ({ searchValue }) => {
  const [from, to] = useMemo(() => searchValue.split('+').slice(0, 2), [searchValue]);
  const [{ lessThan, greaterThan }, setValues] = useState({ lessThan: 0, greaterThan: 0 });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = parseInt(e.target.value || 0);
    const valuesKey = e.target.name;
    setValues( prev => ({...prev, [valuesKey]: value}) )
    setError(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const valuesAreWithinRange = greaterThan <= 100 && lessThan <= 100 && greaterThan >= 0 && lessThan >= 0;
    if (greaterThan > lessThan) return setError('"FROM" must be less than "TO"');
    else if (!greaterThan && !lessThan) return setError('Please fill in filter values');
    else if (!valuesAreWithinRange) return setError('Values must range from 0 - 100');
    setError(null);
    navigate(`/cards/rating/${greaterThan}+${lessThan}`);
  }

  return (
    <form className="price_filter" onSubmit={handleSubmit}>
      <div className="filters flex-row ai-center jc-center">
        <div className="input-container relative">
          <label htmlFor="graterThan" className={`absolute ${error && 'bad'}`}>
            FROM
          </label>
          <input
            type="number"
            id="greaterThan"
            name="greaterThan"
            min={0} max={100}
            className="full-w full-border"
            onChange={handleChange}
          />
      </div>
      <div className="input-container relative">
        <label htmlFor="lessThan" className={`absolute ${error && 'bad'}`}>
          TO
        </label>
          <input
            type="number"
            id="lessThan"
            name="lessThan"
            min={0} max={100}
            className="full-w full-border"
            onChange={handleChange}
          />
      </div>
      <button className="action-btn relative sell-btn filter_btn">SUBMIT</button>
      </div>
      { error && <p className="filter_err_msg bad">{error}</p>}
      {
        (from && to) ?
          <p>From <b className="highlight">{from}</b> to <b className="highlight">{to}</b></p> :
          <p><b className="highlight">Showing all cards</b></p>
      }
    </form>
  )
}

export default RatingFilter
