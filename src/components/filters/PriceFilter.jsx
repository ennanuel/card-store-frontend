import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PriceFilter = ({ searchValue }) => {
  const [error, setError] = useState(null);
  const [{ lessThan, greaterThan }, setValues] = useState({ lessThan: 0, greaterThan: 0 });
  const [from, to] = useMemo(() => searchValue.split('+').slice(0, 2), [searchValue]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError(null);
    const value = parseInt(e.target.value || 0);
    const valuesKey = e.target.name;
    setValues(prev => ({ ...prev, [valuesKey]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (greaterThan > lessThan) return setError('"FROM" must be less than "TO"');
    if (!greaterThan && !lessThan) return setError('Please fill in filter values');
    setError(null);
    navigate(`/cards/price/${greaterThan}+${lessThan}`);
  };

  return (
    <form onSubmit={handleSubmit} className="price_filter">
      <div className="filters flex-row ai-center jc-center">
        <div className="input-container relative">
        <label htmlFor="lt" className={`absolute ${error && 'bad'}`}>FROM</label>
          <input
            type="number"
            id="greaterThan"
            name="greaterThan"
            className="full-w full-border"
            min={0}
            onChange={handleChange} />
      </div>
      <div className="input-container relative">
        <label htmlFor="lt" className={`absolute ${error && 'bad'}`}>TO</label>
          <input
            type="number"
            id="lessThan"
            name="lessThan"
            min={0}
            className="full-w full-border"
            onChange={handleChange}
          />
      </div>
      <button className="action-btn relative sell-btn filter_btn">SUBMIT</button>
      </div>
      { error && <p className="filter_err_msg bad">{error}</p> }
      {
        (from && to) ?
          <p>From <b className="highlight">{from}</b> to <b className="highlight">{to}</b></p> :
          <p><b className="highlight">Showing all cards</b></p>
      }
    </form>
  )
}

export default PriceFilter
