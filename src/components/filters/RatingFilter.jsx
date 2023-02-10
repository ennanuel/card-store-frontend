import { useState } from 'react'

const RatingFilter = ({ navigate, val }) => {
  const [{lt, gt}, setValues] = useState({lt: 0, gt: 0})
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const value = e.target.value

    setError(false)
    setValues( prev => ({...prev, [e.target.getAttribute('name')]: parseInt(value || 0)}) )
  }

  const handleClick = () => {
    if(gt > lt) {
      setError('"FROM" must be less than "TO"')
    } 
    else if (!gt && !lt) {
      setError('Please fill in filter values')
    } 
    else if (gt > 100 || lt > 100 || gt < 0 || lt < 0) {
      setError('Values must be on range 0 - 100')
    }
    else {
      setError(false)
      navigate(`/cards/rating/${gt}+${lt}`)
    }
  }

  return (
    <article className="price_filter">
      <div className="filters flex-row align-items-center justify-content-center">
        <div className="input-container relative">
        <label htmlFor="lt" className={`absolute ${error && 'bad'}`}>
          FROM
        </label>
        <input type="number" id="gt" name="gt" min="0" max="100" className="full-w full-border" onChange={handleChange} />
      </div>
      <div className="input-container relative">
        <label htmlFor="lt" className={`absolute ${error && 'bad'}`}>
          TO
        </label>
        <input type="number" id="lt" name="lt" min="0" max="100" className="full-w full-border" onChange={handleChange} />
      </div>
      <button className="action-btn relative sell-btn filter_btn" onClick={handleClick}>SUBMIT</button>
      </div>
      {
        error && <p className="filter_err_msg bad">{error}</p>
      }
      {
        val &&
        <p>From <b className="highlight">{val.split('+')[0]}</b> to <b className="highlight">{val.split('+')[1]}</b></p>
      }
    </article>
  )
}

export default RatingFilter
