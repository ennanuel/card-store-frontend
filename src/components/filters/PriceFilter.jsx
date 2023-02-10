import { useState } from 'react'

const PriceFilter = ({ navigate }) => {
  const [{lt, gt}, setValues] = useState({lt: 0, gt: 0})
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setValues( prev => ({...prev, [e.target.getAttribute('name')]: e.target.value}) )
    console.log(lt, gt)
  }

  const handleClick = () => {
    if(gt > lt) {
      setError('"FROM" cannot be higher than "TO"')
      return;
    }
    setError(false)
    navigate(`/cards/price/${gt}+${lt}`)
  }

  return (
    <article className="price_filter flex-row align-items-center justify-content-center">
      <div className="input-container relative">
        <label htmlFor="lt" className="absolute">
          { error ? <span className="bad">{error}</span> : "FROM"}
        </label>
        <input type="number" id="gt" name="gt" min={0} max={100} className="full-w full-border" onChange={handleChange} />
      </div>
      <div className="input-container relative">
        <label htmlFor="lt" className="absolute">
          TO
        </label>
        <input type="number" id="lt" name="lt" min={0} max={100} className="full-w full-border" onChange={handleChange} />
      </div>
      <button className="action-btn relative sell-btn filter_btn" onClick={handleClick}>SUBMIT</button>
    </article>
  )
}

export default PriceFilter
