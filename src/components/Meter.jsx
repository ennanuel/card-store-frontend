import React from 'react'

const Meter = () => {
  return (
    <div className='meter_container flex-col full-border relative justify-content-center align-items-center'>
        <h3 className='absolute meter_text'>Pending Payment</h3>
        <ul className="meter relative full-w full-border flex-row">
            {   
                ['a', 'b', 'c', 'd', 'e', 'f'].map( (elem, i) => (
                    <li key={i} className={`${i < 1 && 'active'} full-w meter_box relative`}>{i + 1}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Meter
